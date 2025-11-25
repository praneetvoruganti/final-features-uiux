import React from 'react';
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
  Easing,
} from 'react-native-reanimated';
import { styles } from './styles';

const RiderNotificationsScreen = ({ navigation, route }) => {
  const backButtonScale = useSharedValue(1);
  const backButtonOpacity = useSharedValue(1);

  // Mock notifications data
  const notifications = [
    {
      id: 1,
      message: 'Your Booking Request has been Accepted',
      timestamp: '24 Nov 2025 12:57',
      type: 'booking',
    },
    {
      id: 2,
      message:
        'You have reached your Destination. Please make the payment directly to the Driver.',
      timestamp: '24 Nov 2025 12:49',
      type: 'payment',
    },
    {
      id: 3,
      message: 'Payment Done Successfully',
      timestamp: '24 Nov 2025 12:48',
      type: 'success',
    },
    {
      id: 4,
      message:
        'You have reached your Destination. Please make the payment directly to the Driver.',
      timestamp: '24 Nov 2025 12:48',
      type: 'payment',
    },
    {
      id: 5,
      message:
        'You have reached your Destination. Please make the payment directly to the Driver.',
      timestamp: '24 Nov 2025 12:47',
      type: 'payment',
    },
    {
      id: 6,
      message: 'Your Trip has Started. Your booking ID is:77591',
      timestamp: '24 Nov 2025 12:46',
      type: 'trip',
    },
    {
      id: 7,
      message: 'Your Trip has Started. Your booking ID is:736473',
      timestamp: '24 Nov 2025 12:39',
      type: 'trip',
    },
    {
      id: 8,
      message: 'Payment Done Successfully',
      timestamp: '4 Nov 2025 12:42',
      type: 'success',
    },
  ];

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

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FAFAFA" />

      {/* Header */}
      <View style={styles.header}>
        <Animated.View style={backButtonStyle}>
          <TouchableOpacity
            onPress={handleBackPress}
            style={styles.backButton}
            activeOpacity={1}
          >
            <Text style={styles.backIcon}>‹</Text>
          </TouchableOpacity>
        </Animated.View>
        <Text style={styles.headerTitle}>Notifications</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.pageTitle}>Recent Activity</Text>

        {notifications.map((notification, index) => (
          <TouchableOpacity
            key={notification.id}
            style={styles.notificationCard}
            activeOpacity={0.7}
            onPress={() =>
              console.log('Notification pressed:', notification.id)
            }
          >
            <View style={styles.notificationHeader}>
              <View
                style={[
                  styles.notificationDot,
                  notification.type === 'success' && styles.dotSuccess,
                  notification.type === 'payment' && styles.dotPayment,
                  notification.type === 'trip' && styles.dotTrip,
                  notification.type === 'booking' && styles.dotBooking,
                ]}
              />
              <Text style={styles.notificationTimestamp}>
                {notification.timestamp}
              </Text>
            </View>
            <Text style={styles.notificationMessage}>
              {notification.message}
            </Text>
          </TouchableOpacity>
        ))}

        <View style={styles.endSpacer} />
      </ScrollView>
    </View>
  );
};

export default RiderNotificationsScreen;
