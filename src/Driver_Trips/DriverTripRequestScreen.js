import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ToastAndroid,
  Platform,
  Alert,
  ScrollView,
} from 'react-native';
import { styles } from './styles';

const DriverTripRequestScreen = ({ navigation, route }) => {
  const [selectedFare, setSelectedFare] = useState(null);
  const [timeLeft, setTimeLeft] = useState(19);
  const [baseFare] = useState(238);

  // show toast cross-platform
  const showToast = message => {
    if (Platform.OS === 'android') {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    } else {
      Alert.alert('', message);
    }
  };

  // timer countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleIgnore();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleBackPress = () => {
    navigation?.goBack();
  };

  const handleFareSelect = increment => {
    if (selectedFare === increment) {
      setSelectedFare(null);
    } else {
      setSelectedFare(increment);
    }
  };

  const handleAccept = () => {
    const finalFare = selectedFare ? baseFare + selectedFare : baseFare;
    showToast(`Ride Accepted - Final Fare: ₹${finalFare}`);
  };

  const handleIgnore = () => {
    showToast('Ride Ignored');
  };

  const totalFare = selectedFare ? baseFare + selectedFare : baseFare;
  const fareIncrements = [10, 15, 20, 25, 30];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FAFAFA" />

      {/* simple header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={handleBackPress}
          style={styles.backButton}
          activeOpacity={0.7}
        >
          <Text style={styles.backIcon}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>New Ride Request</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        bounces={true}
      >
        {/* trip details compact */}
        <View style={styles.tripMetrics}>
          <View style={styles.metricItem}>
            <Text style={styles.metricValue}>12 KM</Text>
            <Text style={styles.metricLabel}>Distance</Text>
          </View>
          <View style={styles.metricDivider} />
          <View style={styles.metricItem}>
            <Text style={styles.metricValue}>30 Min</Text>
            <Text style={styles.metricLabel}>Duration</Text>
          </View>
        </View>

        {/* pickup location elegant */}
        <View style={styles.locationCard}>
          <View style={styles.locationDot} />
          <Text style={styles.locationText}>
            INOX GVK One, Road Number 1, Balapur Basthi, Banjara Hills,
            Hyderabad, Telangana, India
          </Text>
        </View>

        {/* fare display prominent */}
        <View style={styles.fareDisplayContainer}>
          <Text style={styles.fareAmount}>₹{totalFare}</Text>
          {selectedFare && (
            <Text style={styles.fareBonus}>+₹{selectedFare} bonus</Text>
          )}
        </View>

        {/* add fare section */}
        <View style={styles.addFareSection}>
          <Text style={styles.addFareLabel}>Add Fare</Text>
          <View style={styles.fareButtonsContainer}>
            {fareIncrements.map(increment => (
              <TouchableOpacity
                key={increment}
                style={[
                  styles.fareButton,
                  selectedFare === increment && styles.fareButtonSelected,
                ]}
                onPress={() => handleFareSelect(increment)}
                activeOpacity={0.7}
              >
                <Text
                  style={[
                    styles.fareButtonText,
                    selectedFare === increment && styles.fareButtonTextSelected,
                  ]}
                >
                  +{increment}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* accept button hero */}
        <View style={styles.actionSection}>
          <TouchableOpacity
            style={styles.acceptButton}
            onPress={handleAccept}
            activeOpacity={0.9}
          >
            <Text style={styles.acceptButtonText}>Accept Ride</Text>
          </TouchableOpacity>

          {/* timer clean */}
          <View style={styles.timerRow}>
            <Text style={styles.timerLabel}>Time remaining:</Text>
            <Text style={styles.timerText}>
              {String(Math.floor(timeLeft / 60)).padStart(2, '0')}:
              {String(timeLeft % 60).padStart(2, '0')}
            </Text>
          </View>

          {/* ignore subtle */}
          <TouchableOpacity
            style={styles.ignoreButton}
            onPress={handleIgnore}
            activeOpacity={0.6}
          >
            <Text style={styles.ignoreButtonText}>Ignore</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default DriverTripRequestScreen;
