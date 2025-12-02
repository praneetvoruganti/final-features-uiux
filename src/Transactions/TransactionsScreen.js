import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  FadeIn,
  SlideInRight,
  Easing,
} from 'react-native-reanimated';
import { styles } from './styles';

const TransactionsScreen = ({ navigation, route }) => {
  const backButtonScale = useSharedValue(1);
  const backButtonOpacity = useSharedValue(1);

  // Mock transaction data
  const transactionData = {
    availableBalance: 180,
    transactions: [
      {
        id: 1,
        type: 'credit',
        amount: 200,
        date: '2025-11-30 14:23:12',
        description: 'Promotional Credit',
        status: 'completed',
      },
      {
        id: 2,
        type: 'debit',
        amount: 20,
        date: '2025-11-30 16:45:32',
        description: 'Discount Applied (20% off)',
        rideId: '64190',
        originalFare: 100,
        discountedFare: 80,
        status: 'applied',
      },
    ],
  };

  const backButtonStyle = useAnimatedStyle(() => ({
    transform: [{ scale: backButtonScale.value }],
    opacity: backButtonOpacity.value,
  }));

  const handleBackPress = () => {
    backButtonScale.value = withTiming(0.95, {
      duration: 100,
      easing: Easing.out(Easing.ease),
    });
    backButtonOpacity.value = withTiming(0.6, { duration: 100 });
    setTimeout(() => {
      backButtonScale.value = withSpring(1, { damping: 20, stiffness: 300 });
      backButtonOpacity.value = withTiming(1, { duration: 150 });
      navigation?.goBack();
    }, 100);
  };

  const renderTransactionCard = (transaction, index) => {
    const isCredit = transaction.type === 'credit';
    const isDebit = transaction.type === 'debit';

    return (
      <Animated.View
        key={transaction.id}
        entering={FadeIn.delay(index * 50).duration(400)}
        style={styles.transactionCard}
      >
        <View style={styles.transactionHeader}>
          <View style={styles.transactionIconWrapper}>
            <View
              style={[
                styles.transactionTypeIndicator,
                isCredit ? styles.creditIndicator : styles.debitIndicator,
              ]}
            />
            <View style={styles.transactionMeta}>
              <Text style={styles.transactionType}>
                {isCredit ? 'Credit Received' : 'Discount Applied'}
              </Text>
              <Text style={styles.transactionDate}>{transaction.date}</Text>
            </View>
          </View>

          <Text
            style={[
              styles.transactionAmount,
              isCredit ? styles.creditAmount : styles.debitAmount,
            ]}
          >
            {isCredit ? '+' : '-'}₹{transaction.amount}
          </Text>
        </View>

        <View style={styles.transactionBody}>
          <Text style={styles.transactionDescription}>
            {transaction.description}
          </Text>

          {transaction.rideId && (
            <>
              <View style={styles.divider} />
              <View style={styles.rideDetails}>
                <View style={styles.rideDetailRow}>
                  <Text style={styles.rideDetailLabel}>Ride ID</Text>
                  <Text style={styles.rideDetailValue}>
                    #{transaction.rideId}
                  </Text>
                </View>
                <View style={styles.rideDetailRow}>
                  <Text style={styles.rideDetailLabel}>Original Fare</Text>
                  <Text style={styles.rideDetailValue}>
                    ₹{transaction.originalFare}
                  </Text>
                </View>
                <View style={styles.rideDetailRow}>
                  <Text style={styles.rideDetailLabel}>After Discount</Text>
                  <Text
                    style={[styles.rideDetailValue, styles.discountedValue]}
                  >
                    ₹{transaction.discountedFare}
                  </Text>
                </View>
              </View>
            </>
          )}

          {/* Status Badge moved inside body */}
          <View
            style={[
              styles.statusBadge,
              transaction.status === 'completed'
                ? styles.statusCompleted
                : styles.statusApplied,
            ]}
          >
            <Text style={styles.statusText}>
              {transaction.status === 'completed' ? 'Completed' : 'Applied'}
            </Text>
          </View>
        </View>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#EE436E" />

      {/* Hero Header */}
      <Animated.View entering={FadeIn.duration(400)} style={styles.heroHeader}>
        <View style={styles.headerTop}>
          <Animated.View style={backButtonStyle}>
            <TouchableOpacity
              onPress={handleBackPress}
              style={styles.backButton}
              activeOpacity={1}
            >
              <Text style={styles.backIcon}>‹</Text>
            </TouchableOpacity>
          </Animated.View>
          <Text style={styles.headerTitle}>Transaction History</Text>
          <View style={styles.headerSpacer} />
        </View>

        {/* Balance Hero Section */}
        <View style={styles.balanceSection}>
          <Text style={styles.balanceLabel}>Available Balance</Text>
          <Text style={styles.balanceAmount}>
            ₹{transactionData.availableBalance}
          </Text>
          <Text style={styles.balanceSubtext}>
            Auto-applied as discount on your rides
          </Text>
        </View>
      </Animated.View>

      {/* Transaction List */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionTitle}>Recent Transactions</Text>

        {transactionData.transactions.length > 0 ? (
          transactionData.transactions.map((transaction, index) =>
            renderTransactionCard(transaction, index),
          )
        ) : (
          <Animated.View
            entering={FadeIn.duration(600)}
            style={styles.emptyState}
          >
            <Text style={styles.emptyStateText}>No transactions yet</Text>
            <Text style={styles.emptyStateSubtext}>
              Your credit and discount history will appear here
            </Text>
          </Animated.View>
        )}

        {/* Info Card */}
        <Animated.View
          entering={FadeIn.delay(200).duration(400)}
          style={styles.infoCard}
        >
          <Text style={styles.infoTitle}>How Your Credits Work</Text>
          <Text style={styles.infoDescription}>
            Wallet credits automatically apply as discounts on your rides.
            Here's how much you save:
          </Text>

          {/* On-Demand Rides */}
          <View style={styles.creditTypeSection}>
            <View style={styles.creditTypeHeader}>
              <View style={styles.creditTypeDot} />
              <Text style={styles.creditTypeTitle}>On-Demand Rides</Text>
            </View>
            <Text style={styles.creditTypeDetail}>
              20% off • Maximum ₹50 discount per ride
            </Text>
          </View>

          {/* Scheduled Rides */}
          <View style={styles.creditTypeSection}>
            <View style={styles.creditTypeHeader}>
              <View
                style={[styles.creditTypeDot, styles.creditTypeDotSecondary]}
              />
              <Text style={styles.creditTypeTitle}>Scheduled Rides</Text>
            </View>
            <Text style={styles.creditTypeDetail}>
              20% off • Maximum ₹200 discount per ride
            </Text>
          </View>

          {/* Footer note */}
          <Text style={styles.infoFooter}>
            Discounts are automatically applied when you have available credits.
            Your wallet balance updates after each ride.
          </Text>
        </Animated.View>
      </ScrollView>
    </View>
  );
};

export default TransactionsScreen;
