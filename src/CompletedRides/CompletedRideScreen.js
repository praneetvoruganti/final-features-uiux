import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
// Icon removed - using text-based alternatives
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  FadeIn,
  FadeOut,
  SlideInRight,
  useAnimatedProps,
  interpolate,
} from 'react-native-reanimated';
import SingleStopView from './SingleStopView';
import MultipleStopsView from './MultipleStopsView';
import styles from './styles';

const CompletedRideScreen = ({ navigation, route }) => {
  const [viewMode, setViewMode] = useState('single'); // 'single' or 'multiple'
  const toggleTranslateX = useSharedValue(0);
  const toggleScale = useSharedValue(1);
  const contentOpacity = useSharedValue(1);
  const backButtonScale = useSharedValue(1);
  const helpButtonScale = useSharedValue(1);

  // Mock data - replace with actual data from route.params or API
  const rideData = {
    vehicleType: 'Mini',
    vehicleNumber: 'AP29AZ1234',
    driverName: 'Test Dri',
    tripId: viewMode === 'single' ? '64190' : '257959',
    totalDistance: viewMode === 'single' ? '1264 km' : '347 km',
    totalFare: viewMode === 'single' ? '₹18395' : '₹12500',

    // Single stop data
    singleStop: {
      from: 'Central Facilities For Research & Development, Osmania University Main Rd, Osmania University, Amberpet, Hyderabad, Telangana 500007, India',
      to: '7/1, Whannele Rd, Amani Estate, Egmore, Chennai, Tamil Nadu, 600008, India',
    },

    // Multiple stops data
    multipleStops: [
      {
        id: 1,
        from: 'Central Facilities For Research & Development, Osmania University Main Rd, Osmania University, Amberpet, Hyderabad, Telangana 500007, India',
        to: 'Warangal, Telangana, India',
      },
      {
        id: 2,
        from: 'Warangal, Telangana, India',
        to: 'Warangal Fort, Mathwada, Warangal, Telangana, India',
      },
      {
        id: 3,
        from: 'Warangal Fort, Mathwada, Warangal, Telangana, India',
        to: 'Bhadrakali Lake, Telangana',
      },
      {
        id: 4,
        from: 'Bhadrakali Lake, Telangana',
        to: 'Thammaya Farmstay Resort, Rajavaram, Warangal-Hyderabad Highway, Rajaram, Telangana, India',
      },
      {
        id: 5,
        from: 'Thammaya Farmstay Resort, Rajavaram, Warangal-Hyderabad Highway, Rajaram, Telangana, India',
        to: 'Bhuvanagiri Fort, Bhuvanagiri, Telangana, India',
      },
      {
        id: 6,
        from: 'Bhuvanagiri Fort, Bhuvanagiri, Telangana, India',
        to: 'Dammaiguda X Road, P S Rao Nagar, Kapra, Secunderabad, Telangana, India',
      },
      {
        id: 7,
        from: 'Dammaiguda X Road, P S Rao Nagar, Kapra, Secunderabad, Telangana, India',
        to: 'Kothapet, Hyderabad, Telangana, India',
      },
      {
        id: 8,
        from: 'Kothapet, Hyderabad, Telangana, India',
        to: 'Kothapet, Hyderabad, Telangana, India',
      },
    ],
  };

  const handleToggle = () => {
    // Fade out content
    contentOpacity.value = withTiming(0, { duration: 150 });

    // Animate toggle with bounce
    toggleScale.value = withSpring(1.1, { damping: 15, stiffness: 400 });

    setTimeout(() => {
      const newMode = viewMode === 'single' ? 'multiple' : 'single';
      setViewMode(newMode);
      toggleTranslateX.value = withSpring(newMode === 'multiple' ? 48 : 0, {
        damping: 20,
        stiffness: 300,
        mass: 0.8,
      });

      // Fade in content
      contentOpacity.value = withTiming(1, { duration: 300 });
      toggleScale.value = withSpring(1, { damping: 20, stiffness: 300 });
    }, 150);
  };

  const toggleStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: toggleTranslateX.value }],
  }));

  const toggleContainerStyle = useAnimatedStyle(() => ({
    transform: [{ scale: toggleScale.value }],
  }));

  const contentStyle = useAnimatedStyle(() => ({
    opacity: contentOpacity.value,
  }));

  const backButtonStyle = useAnimatedStyle(() => ({
    transform: [{ scale: backButtonScale.value }],
  }));

  const helpButtonAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: helpButtonScale.value }],
  }));

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FEFEFE" />

      {/* Header */}
      <Animated.View entering={FadeIn.duration(400)} style={styles.header}>
        <Animated.View style={backButtonStyle}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            onPressIn={() =>
              (backButtonScale.value = withSpring(0.9, { damping: 15 }))
            }
            onPressOut={() =>
              (backButtonScale.value = withSpring(1, { damping: 15 }))
            }
            style={styles.backButton}
            activeOpacity={1}
          >
            <Text style={styles.backIcon}>‹</Text>
          </TouchableOpacity>
        </Animated.View>

        <Text style={styles.headerTitle}>Completed Ride</Text>

        {/* Toggle */}
        <Animated.View style={[styles.toggleContainer, toggleContainerStyle]}>
          <TouchableOpacity
            onPress={handleToggle}
            activeOpacity={1}
            style={styles.toggleTrack}
          >
            <Animated.View style={[styles.toggleThumb, toggleStyle]} />
            <View style={styles.toggleIconContainer}>
              <Text
                style={[
                  styles.toggleIcon,
                  { color: viewMode === 'single' ? '#FEFEFE' : '#666666' },
                ]}
              >
                1
              </Text>
            </View>
            <View style={[styles.toggleIconContainer, { left: 48 }]}>
              <Text
                style={[
                  styles.toggleIcon,
                  { color: viewMode === 'multiple' ? '#FEFEFE' : '#666666' },
                ]}
              >
                M
              </Text>
            </View>
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>

      {/* Content */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Ride Info Card */}
        <Animated.View
          entering={FadeIn.delay(100).duration(400)}
          style={styles.infoCard}
        >
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Vehicle Type</Text>
            <Text style={styles.infoValue}>{rideData.vehicleType}</Text>
          </View>
          <View style={styles.separator} />

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Vehicle Number</Text>
            <Text style={styles.infoValue}>{rideData.vehicleNumber}</Text>
          </View>
          <View style={styles.separator} />

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Driver Name</Text>
            <Text style={styles.infoValue}>{rideData.driverName}</Text>
          </View>
          <View style={styles.separator} />

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Trip Id</Text>
            <Text style={styles.infoValue}>{rideData.tripId}</Text>
          </View>
          <View style={styles.separator} />

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Total Distance</Text>
            <Text style={styles.infoValue}>{rideData.totalDistance}</Text>
          </View>
        </Animated.View>

        {/* Route Details */}
        <Animated.View style={contentStyle}>
          {viewMode === 'single' ? (
            <SingleStopView
              data={rideData.singleStop}
              fare={rideData.totalFare}
            />
          ) : (
            <MultipleStopsView
              stops={rideData.multipleStops}
              fare={rideData.totalFare}
            />
          )}
        </Animated.View>

        {/* Help Button */}
        <Animated.View
          entering={FadeIn.delay(200).duration(400)}
          style={helpButtonAnimatedStyle}
        >
          <TouchableOpacity
            style={styles.helpButton}
            onPressIn={() =>
              (helpButtonScale.value = withSpring(0.96, { damping: 15 }))
            }
            onPressOut={() =>
              (helpButtonScale.value = withSpring(1, { damping: 15 }))
            }
            activeOpacity={1}
            onPress={() => {
              // Handle help action
              console.log('Need help with ride:', rideData.tripId);
            }}
          >
            <Text style={styles.helpButtonText}>Need Help with this Ride?</Text>
          </TouchableOpacity>
        </Animated.View>
      </ScrollView>
    </View>
  );
};

export default CompletedRideScreen;
