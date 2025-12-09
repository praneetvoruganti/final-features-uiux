const checkInterval = setInterval(async () => {
  const BATCH_SIZE = 10;
  const BATCH_DURATION_MS = 30000; // 30 seconds per batch

  try {
    const rideInfo = await fireStoreDB
      .collection('bookings')
      .doc(bookingId)
      .get();

    if (!rideInfo.exists) {
      console.log('Ride not found, stopping polling');
      clearInterval(checkInterval);
      return;
    }

    const ride = rideInfo.data();

    // 1. Stop if ride is already resolved
    if (ride.status === 'ACCEPTED' || ride.status === 'CANCELLED') {
      console.log(`Ride ${ride.status}, stopping polling`);
      clearInterval(checkInterval);
      return;
    }

    const currentTime = Date.now();
    const rideCreatedAt = ride.createdAt || currentTime; // fallback to now if missing
    const timeElapsed = currentTime - rideCreatedAt;

    // 2. Determine which batch (wave) we are in
    const currentBatchIndex = Math.floor(timeElapsed / BATCH_DURATION_MS);

    const totalDriversList = Object.keys(ride.totalDrivers || {});
    const totalBatches = Math.ceil(totalDriversList.length / BATCH_SIZE);

    console.log(
      `Polling ride ${bookingId}: ${timeElapsed / 1000}s elapsed. Batch ${
        currentBatchIndex + 1
      }/${totalBatches}`,
    );

    // 3. Timeout Check: If we've gone past the last batch's time window
    if (currentBatchIndex >= totalBatches) {
      console.log('All batches exhausted - cancelling booking');

      await fireStoreDB
        .collection('bookings')
        .doc(bookingId)
        .set(
          {
            ...ride,
            status: 'CANCELLED',
            subStatus: 'NO_DRIVERS_AVAILABLE',
          },
          { merge: true },
        );

      // Send notification to customer
      try {
        if (ride.customer_token) {
          const payload = {
            token: ride.customer_token,
            android: {
              priority: 'high',
              notification: { channelId: 'instant_rides' },
            },
            data: {
              title: 'OK2GO - No Drivers Available',
              body: 'Sorry, no drivers are available at the moment.',
              screen: 'Home',
              bookingId: bookingId ? String(bookingId) : '',
            },
          };
          await fbadmin.messaging().send(payload);
        }
      } catch (notifError) {
        console.error('Error sending no drivers notification:', notifError);
      }

      clearInterval(checkInterval);
      return;
    }

    // 4. Identify drivers for the current batch
    const startIdx = currentBatchIndex * BATCH_SIZE;
    const endIdx = startIdx + BATCH_SIZE;
    const currentBatchDrivers = totalDriversList.slice(startIdx, endIdx);

    // 5. Filter for drivers who haven't been notified yet
    // We store 'notifiedDrivers' map in the ride document to keep state
    const notifiedDrivers = ride.notifiedDrivers || {};
    const driversToNotify = currentBatchDrivers.filter(
      driverId => !notifiedDrivers[driverId],
    );

    if (driversToNotify.length > 0) {
      console.log(
        `Sending notifications to new batch: ${driversToNotify.length} drivers`,
      );

      // Update DB first to avoid re-sending if the script crashes mid-loop
      const updates = {};
      driversToNotify.forEach(dId => {
        updates[`notifiedDrivers.${dId}`] = true;
      });

      await fireStoreDB.collection('bookings').doc(bookingId).update(updates);

      // Send Broadcast Notifications
      const notifyPromises = driversToNotify.map(async driverId => {
        try {
          // We need to fetch driver token first
          const driverDoc = await fireStoreDB
            .collection('users')
            .doc(driverId)
            .get();
          if (!driverDoc.exists) return;

          const driverData = driverDoc.data();
          if (!driverData.pushToken) return;

          // Basic check: is driver still available?
          // In a broadcast model, we might skip strict locking here and let them race to accept,
          // OR we can filter out busy drivers to save notifications.
          // Let's assume we blast everyone who was originally found in the search.

          const payload = {
            token: driverData.pushToken,
            android: { priority: 'high' },
            data: {
              title: 'OK2GO - New Ride Request',
              body: `Fare: ₹${ride.estimate} - Distance: ${ride.distance}km`,
              answerText: 'View Trip',
              screen: 'DriverTrips',
              bookingId: String(bookingId),
              // IMPORTANT: Add a tag so the app knows this is a broadcast/race
              type: 'RIDE_BROADCAST',
            },
          };

          return fbadmin.messaging().send(payload);
        } catch (err) {
          console.error(`Failed to notify driver ${driverId}`, err);
        }
      });

      await Promise.all(notifyPromises);
      console.log(`Batch ${currentBatchIndex + 1} notifications sent.`);
    }
  } catch (error) {
    console.error('Error in batch polling:', error);
    clearInterval(checkInterval);
  }
}, 1000);
