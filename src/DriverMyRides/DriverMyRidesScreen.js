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
  FadeIn,
  Easing,
} from 'react-native-reanimated';
import { styles } from './styles';

const DriverMyRidesScreen = ({ navigation, route }) => {
  const backButtonScale = useSharedValue(1);
  const backButtonOpacity = useSharedValue(1);

  // Mock trip data - matching the image structure
  const tripData = {
    customer: {
      name: 'P T',
      charges: 'INR 190.00',
      date: '2025-11-24 16:49:46',
    },
    pickup: {
      address:
        'Central Facilities For Research & Development, Osmania University Main Rd, Osmania University, Amberpet, Hyderabad, Telangana 500007, India',
    },
    drop: {
      address: 'Tarnaka, Secunderabad, Telangana, India',
    },
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
        <Text style={styles.headerTitle}>My Rides</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Page Title */}
        <Text style={styles.pageTitle}>Trip Details</Text>

        {/* Customer Details Section */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>CUSTOMER DETAILS</Text>
          <View style={styles.card}>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Name</Text>
              <Text style={styles.infoValue}>{tripData.customer.name}</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Trip Charges</Text>
              <Text style={styles.infoValue}>{tripData.customer.charges}</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Trip Date</Text>
              <Text style={styles.infoValue}>{tripData.customer.date}</Text>
            </View>
          </View>
        </View>

        {/* Pickup Details Section */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>PICKUP DETAILS</Text>
          <View style={styles.card}>
            <Text style={styles.locationLabel}>Address</Text>
            <Text style={styles.locationText}>{tripData.pickup.address}</Text>
          </View>
        </View>

        {/* Drop Details Section */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>DROP DETAILS</Text>
          <View style={styles.card}>
            <Text style={styles.locationLabel}>Address</Text>
            <Text style={styles.locationText}>{tripData.drop.address}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DriverMyRidesScreen;
