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

// Main component for Rider Source and Destination screen
const RiderSrcDestScreen = ({ navigation, route }) => {
  // Animation values for back button
  const backButtonScale = useSharedValue(1);
  const backButtonOpacity = useSharedValue(1);

  // Location states
  const [sourceLocation, setSourceLocation] = useState('');
  const [destinationLocation, setDestinationLocation] = useState('');
  const [selectedMarker, setSelectedMarker] = useState('pickup'); // Track active marker for map adjustment

  // Back button animation style
  const backButtonStyle = useAnimatedStyle(() => ({
    transform: [{ scale: backButtonScale.value }],
    opacity: backButtonOpacity.value,
  }));

  // Handle back navigation with animation
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

  // Proceed to ride options
  const handleBookRide = () => {
    console.log('Book ride:', { sourceLocation, destinationLocation });
    // TODO: Navigate to vehicle selection screen
  };

  // Toggle between pickup/drop marker adjustment
  const handleMarkerToggle = marker => {
    setSelectedMarker(marker);
    console.log('Adjusting marker:', marker);
    // Map should respond to this state change
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FAFAFA" />

      {/* Simple Header */}
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

      {/* Location Inputs Card */}
      <View style={styles.inputsCard}>
        {/* Pickup Input */}
        <View style={styles.inputRow}>
          <View style={styles.dotContainer}>
            <View style={styles.pickupDot} />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Pickup location"
            placeholderTextColor="#999999"
            value={sourceLocation}
            onChangeText={setSourceLocation}
          />
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Drop Input */}
        <View style={styles.inputRow}>
          <View style={styles.dotContainer}>
            <View style={styles.dropDot} />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Drop location"
            placeholderTextColor="#999999"
            value={destinationLocation}
            onChangeText={setDestinationLocation}
          />
        </View>
      </View>

      {/* Marker Adjustment Toggle */}
      {(sourceLocation || destinationLocation) && (
        <View style={styles.markerToggleContainer}>
          <Text style={styles.toggleLabel}>ADJUST MARKER ON MAP</Text>
          <View style={styles.toggleButtons}>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                selectedMarker === 'pickup' && styles.toggleButtonActive,
              ]}
              onPress={() => handleMarkerToggle('pickup')}
              activeOpacity={0.7}
            >
              <View
                style={[
                  styles.toggleDot,
                  styles.toggleDotPickup,
                  selectedMarker === 'pickup' && styles.toggleDotActive,
                ]}
              />
              <Text
                style={[
                  styles.toggleButtonText,
                  selectedMarker === 'pickup' && styles.toggleButtonTextActive,
                ]}
              >
                Pickup Point
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                selectedMarker === 'drop' && styles.toggleButtonActive,
              ]}
              onPress={() => handleMarkerToggle('drop')}
              activeOpacity={0.7}
            >
              <View
                style={[
                  styles.toggleDot,
                  styles.toggleDotDrop,
                  selectedMarker === 'drop' && styles.toggleDotActive,
                ]}
              />
              <Text
                style={[
                  styles.toggleButtonText,
                  selectedMarker === 'drop' && styles.toggleButtonTextActive,
                ]}
              >
                Drop Point
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* Map Placeholder */}
      <View style={styles.mapPlaceholder}>
        <Text style={styles.mapText}>Map View</Text>
      </View>

      {/* Book Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.bookButton,
            (!sourceLocation || !destinationLocation) &&
              styles.bookButtonDisabled,
          ]}
          activeOpacity={0.85}
          onPress={handleBookRide}
          disabled={!sourceLocation || !destinationLocation}
        >
          <Text style={styles.bookButtonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RiderSrcDestScreen;
