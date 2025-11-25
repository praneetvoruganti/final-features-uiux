import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
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

const RiderSrcDestScreen = ({ navigation, route }) => {
  const backButtonScale = useSharedValue(1);
  const backButtonOpacity = useSharedValue(1);
  const [sourceLocation, setSourceLocation] = useState('');
  const [destinationLocation, setDestinationLocation] = useState('');

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

  const handleSearchRide = () => {
    console.log('Search ride:', { sourceLocation, destinationLocation });
  };

  const handleSwapLocations = () => {
    const temp = sourceLocation;
    setSourceLocation(destinationLocation);
    setDestinationLocation(temp);
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
        <Text style={styles.headerTitle}>Book a Ride</Text>
        <View style={styles.headerSpacer} />
      </View>

      {/* Map Placeholder - Full height */}
      <View style={styles.mapPlaceholder}>
        <Text style={styles.mapText}>map</Text>
      </View>

      {/* Location Selection Card - Floating */}
      <View style={styles.locationContainer}>
        <View style={styles.locationCard}>
          {/* Pickup Input */}
          <View style={styles.locationInputWrapper}>
            <View style={styles.locationDotWrapper}>
              <View style={styles.pickupDot} />
            </View>
            <TextInput
              style={styles.locationInput}
              placeholder="Pickup location"
              placeholderTextColor="#ADADAD"
              value={sourceLocation}
              onChangeText={setSourceLocation}
            />
          </View>

          {/* Connecting Line */}
          <View style={styles.connectionLineWrapper}>
            <View style={styles.connectionLine} />

            {/* Swap Button */}
            <TouchableOpacity
              style={styles.swapButton}
              onPress={handleSwapLocations}
              activeOpacity={0.7}
            >
              <Text style={styles.swapIcon}>⇅</Text>
            </TouchableOpacity>
          </View>

          {/* Drop Input */}
          <View style={styles.locationInputWrapper}>
            <View style={styles.locationDotWrapper}>
              <View style={styles.dropDot} />
            </View>
            <TextInput
              style={styles.locationInput}
              placeholder="Drop location"
              placeholderTextColor="#ADADAD"
              value={destinationLocation}
              onChangeText={setDestinationLocation}
            />
          </View>
        </View>

        {/* Search Button */}
        <TouchableOpacity
          style={[
            styles.searchButton,
            (!sourceLocation || !destinationLocation) &&
              styles.searchButtonDisabled,
          ]}
          activeOpacity={0.8}
          onPress={handleSearchRide}
          disabled={!sourceLocation || !destinationLocation}
        >
          <Text style={styles.searchButtonText}>Find Available Rides</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RiderSrcDestScreen;
