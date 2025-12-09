const checkInterval = setInterval(async () => {
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

    if (ride.status === 'ACCEPTED' || ride.status === 'CANCELLED') {
      console.log(`Ride ${ride.status}, stopping polling`);
      clearInterval(checkInterval);
      return;
    }

    const currentTime = Date.now();
    const timeSinceDriverChanged = currentTime - (ride.driverChangedAt || 0);

    console.log(
      `Polling ride ${bookingId}: ${timeSinceDriverChanged / 1000}s elapsed`,
    );

    if (timeSinceDriverChanged > 20000) {
      console.log('20 seconds elapsed, moving to next driver');

      if (ride.currentDriverId) {
        ride.ignoredBy = ride.ignoredBy || {};
        ride.ignoredBy[ride.currentDriverId] = true;
        console.log(`Added driver ${ride.currentDriverId} to ignoredBy`);

        // Remove driver from queue and update user status
        try {
          const node = { driverId: ride.currentDriverId, status: '0' };
          await fireStoreDB
            .collection('driversQueue')
            .doc(ride.currentDriverId)
            .set(node, { merge: true });
          console.log(`Removed driver ${ride.currentDriverId} from queue`);

          // Update driver status in users collection
          await fireStoreDB.collection('users').doc(ride.currentDriverId).set(
            {
              driverActiveStatus: true,
              isEngaged: '0',
              isEngagedd: '0',
              queue: false,
            },
            { merge: true },
          );
          console.log(
            `Updated driver ${ride.currentDriverId} status in users collection`,
          );
        } catch (queueError) {
          console.error('[removeDriverFromQueue] error:', queueError);
        }
      }

      const totalDrivers = Object.keys(ride.totalDrivers || {});

      let ignoredDriversLength = Object.keys(ride.ignoredBy || {}).length;
      if (ride.ignoredBy && Object.keys(ride.ignoredBy).includes('dummy')) {
        ignoredDriversLength = ignoredDriversLength - 1;
      }

      console.log(
        `Total drivers: ${totalDrivers.length}, Ignored: ${ignoredDriversLength}`,
      );

      if (ignoredDriversLength === totalDrivers.length) {
        console.log('All drivers have ignored - cancelling booking');
        ride.status = 'CANCELLED';
        ride.subStatus = 'NO_DRIVERS_AVAILABLE';

        await fireStoreDB.collection('bookings').doc(bookingId).set(ride);

        // Send notification to customer about no drivers available
        try {
          if (ride.customer_token) {
            const payload = {
              token: ride.customer_token,
              android: {
                priority: 'high',
                notification: {
                  channelId: 'instant_rides',
                },
              },
              data: {
                title: 'OK2GO - No Drivers Available',
                body: 'Sorry, no drivers are available at the moment. Please try again later.',
                answerText: 'OK',
                screen: 'Home',
                notificationId: 'NO_DRIVERS',
                bookingId: bookingId ? String(bookingId) : '',
                channelId: 'instant_rides',
              },
            };

            await fbadmin.messaging().send(payload);
            console.log(`No drivers notification sent to customer`);
          }
        } catch (notifError) {
          console.error('Error sending no drivers notification:', notifError);
        }

        clearInterval(checkInterval);
        return;
      }

      let nextDriverId = null;
      for (const driverId of totalDrivers) {
        if (!ride.ignoredBy || !ride.ignoredBy[driverId]) {
          nextDriverId = driverId;
          console.log(`Found next available driver: ${driverId}`);
          break;
        }
      }

      if (!nextDriverId) {
        console.log('No available drivers found - cancelling booking');
        ride.status = 'CANCELLED';
        ride.subStatus = 'NO_DRIVERS_AVAILABLE';

        await fireStoreDB.collection('bookings').doc(bookingId).set(ride);

        // Send notification to customer about no drivers available
        try {
          if (ride.customer_token) {
            const payload = {
              token: ride.customer_token,
              android: {
                priority: 'high',
                notification: {
                  channelId: 'instant_rides',
                },
              },
              data: {
                title: 'OK2GO - No Drivers Available',
                body: 'Sorry, no drivers are available at the moment. Please try again later.',
                answerText: 'OK',
                screen: 'Home',
                notificationId: 'NO_DRIVERS',
                bookingId: bookingId ? String(bookingId) : '',
              },
            };

            await fbadmin.messaging().send(payload);
            console.log(`No drivers notification sent to customer`);
          }
        } catch (notifError) {
          console.error('Error sending no drivers notification:', notifError);
        }

        clearInterval(checkInterval);
        return;
      }

      // Fetch driver data before assigning - using transaction to prevent race conditions
      try {
        // Use transaction to atomically check and lock driver
        const driverData = await fireStoreDB.runTransaction(
          async transaction => {
            const driverRef = fireStoreDB.collection('users').doc(nextDriverId);
            const driverDoc = await transaction.get(driverRef);

            if (!driverDoc.exists) {
              console.log(
                `Driver ${nextDriverId} not found in users collection`,
              );
              return null;
            }

            const data = driverDoc.data();

            // Check if driver is available
            if (!data.queue && data.driverActiveStatus) {
              // Driver is available - lock them atomically
              transaction.update(driverRef, {
                queue: true,
                currentDriverId: nextDriverId,
              });

              console.log(`Locked driver ${nextDriverId} in transaction`);
              return data;
            } else {
              console.log(
                `Driver ${nextDriverId} is busy (queue: ${data.queue}, activeStatus: ${data.driverActiveStatus})`,
              );
              return null;
            }
          },
        );

        if (driverData) {
          // Update ride with new driver and all driver-related fields
          ride.currentDriverId = nextDriverId;
          ride.driver = nextDriverId;
          ride.subStatus = 'NEW';
          ride.driverChangedAt = currentTime;
          ride.requestedDriversBK = ride.requestedDriversBK || {};
          ride.requestedDriversBK[nextDriverId] = true;

          // Update driver-related fields
          ride.driverEstimatedFair = 0;
          ride.driverFairAddon = 0;
          ride.driverLocation = null;
          ride.driverRating = driverData.rating || '0';
          ride.driverTimerStarted = false;
          ride.driver_contact = driverData.mobile || '';
          ride.driver_image = driverData.profilePicture || '';
          ride.driver_minimumCharge = driverData.minimumCharge || '10';
          ride.driver_minimumDistance = driverData.minimumDistance || '2';
          ride.driver_name = driverData.name || '';
          ride.driver_ratePerKM = driverData.ratePerKM || '10';
          ride.driver_token = driverData.pushToken || '';
          ride.driver_vehicleMake = driverData.vehicleMake || '';
          ride.driver_vehicleModel = driverData.vehicleModel || '';
          ride.driver_vehicle_no = driverData.vehicleNumber || '';
          ride.vehicle_number = driverData.vehicleNumber || '';

          // Wrap updates in try-catch for rollback capability
          try {
            // Update driver queue status
            await fireStoreDB
              .collection('driversQueue')
              .doc(nextDriverId)
              .set({ dirverId: nextDriverId, status: '1' }, { merge: true });
            await fireStoreDB.collection('bookings').doc(bookingId).set(ride);

            console.log(
              `Assigned driver ${nextDriverId}, will check again in 20 seconds`,
            );

            // Send push notification to the new driver
            if (driverData.pushToken) {
              let distance = ride.distance;
              let fare = ride.estimate;
              let notificationBody = 'You Have A New Booking Request';
              if (distance && fare) {
                notificationBody = `Fare : ₹${fare}    Distance : ${distance}km`;
              }

              const payload = {
                token: driverData.pushToken,
                android: {
                  priority: 'high',
                },
                data: {
                  title: 'OK2GO - New Ride',
                  body: notificationBody,
                  answerText: 'View Trip Details',
                  screen: 'DriverTrips',
                  notificationId: '89ABC',
                  bookingId: bookingId ? String(bookingId) : '',
                },
              };

              await fbadmin.messaging().send(payload);
              console.log(`Notification sent to driver ${nextDriverId}`);

              // Update user table with currentdriverid and engagement status

              console.log(
                `Updated user ${nextDriverId} with booking ${bookingId}`,
              );
            } else {
              console.log(`No pushToken found for driver ${nextDriverId}`);
            }
          } catch (updateError) {
            console.error(
              `Error updating booking or sending notification in polling:`,
              updateError,
            );

            // Rollback: Unlock the driver
            try {
              await fireStoreDB.collection('users').doc(nextDriverId).set(
                {
                  queue: false,
                  currentDriverId: null,
                },
                { merge: true },
              );

              await fireStoreDB
                .collection('driversQueue')
                .doc(nextDriverId)
                .set({ driverId: nextDriverId, status: '0' }, { merge: true });

              console.log(
                `Rolled back driver ${nextDriverId} lock in polling due to error`,
              );

              // Add driver to ignored list to try next driver
              ride.ignoredBy = ride.ignoredBy || {};
              ride.ignoredBy[nextDriverId] = true;
              await fireStoreDB.collection('bookings').doc(bookingId).set(ride);
            } catch (rollbackError) {
              console.error(
                `Failed to rollback driver ${nextDriverId} in polling:`,
                rollbackError,
              );
            }
          }
        } else {
          // Driver is busy or not active - add to ignored list
          console.log(
            `Driver ${nextDriverId} not available, adding to ignored list`,
          );

          ride.ignoredBy = ride.ignoredBy || {};
          ride.ignoredBy[nextDriverId] = true;

          await fireStoreDB.collection('bookings').doc(bookingId).set(ride);
          console.log(
            `Added busy driver ${nextDriverId} to ignored list, will check next driver in next poll`,
          );
        }
      } catch (driverError) {
        console.error('Error updating driver data:', driverError);
      }
    }
  } catch (error) {
    console.error('Error in polling:', error);
    clearInterval(checkInterval);
  }
}, 1000);
