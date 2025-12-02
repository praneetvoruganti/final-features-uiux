import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  ScrollView,
  StatusBar,
  Image,
} from 'react-native';
import styles from './styles';
import SmartSuggestionsCarousel from '../FinalCarousel/components/SmartSuggestionsCarousel';
import { suggestionCategories } from '../FinalCarousel/data/carouselDataClean';
import MapBackground from './assets/map.svg';

const NewRiderHomescreen = ({ onMenuPress, navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;
  const card1Anim = useRef(new Animated.Value(0)).current;
  const card2Anim = useRef(new Animated.Value(0)).current;
  const card3Anim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Staggered entrance animations
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Cards animate in sequence
      Animated.stagger(80, [
        Animated.spring(card1Anim, {
          toValue: 1,
          useNativeDriver: true,
          tension: 80,
          friction: 10,
        }),
        Animated.spring(card2Anim, {
          toValue: 1,
          useNativeDriver: true,
          tension: 80,
          friction: 10,
        }),
        Animated.spring(card3Anim, {
          toValue: 1,
          useNativeDriver: true,
          tension: 80,
          friction: 10,
        }),
      ]).start();
    });
  }, [fadeAnim, slideAnim, card1Anim, card2Anim, card3Anim]);

  const handleMenu = () => {
    if (onMenuPress) {
      onMenuPress();
    }
  };

  const handleRideType = type => {
    console.log(`Opening ${type} booking`);
    // TODO: Navigate to booking flow for ${type}
  };

  const getCardStyle = cardAnim => {
    return {
      opacity: cardAnim,
      transform: [
        {
          translateY: cardAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [20, 0],
          }),
        },
        {
          scale: cardAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [0.95, 1],
          }),
        },
      ],
    };
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1A1A1A" />

      {/* Map Background */}
      <View style={styles.mapBackground}>
        <MapBackground
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
        />
      </View>

      {/* Dark Overlay */}
      <View style={styles.darkOverlay} />

      {/* Floating Menu Button */}
      <Animated.View style={[styles.header, { opacity: fadeAnim }]}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={handleMenu}
          activeOpacity={0.75}
        >
          <Text style={styles.menuIcon}>‹</Text>
        </TouchableOpacity>
      </Animated.View>

      {/* Full Screen Scrollable Content */}
      <Animated.View
        style={[
          styles.scrollContainer,
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          },
        ]}
      >
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          bounces={true}
        >
          {/* Greeting Section */}
          <View style={styles.greetingSection}>
            <Text style={styles.greetingLabel}>Where are you off to</Text>
            <Text style={styles.userName}>Praneet V</Text>
          </View>

          {/* Ride Types Grid */}
          <View style={styles.rideTypesGrid}>
            {/* Ride Now - Featured */}
            <Animated.View style={getCardStyle(card1Anim)}>
              <TouchableOpacity
                style={[styles.rideCard, styles.rideCardFeatured]}
                onPress={() => handleRideType('instant')}
                activeOpacity={0.9}
              >
                <View style={styles.rideCardContent}>
                  <View style={styles.rideCardTextSection}>
                    <View style={styles.rideCardHeader}>
                      <View style={styles.rideIndicator} />
                      <Text style={styles.rideTitle}>Ride Now</Text>
                    </View>
                    <Text style={styles.rideTagline}>Zero Surge</Text>
                    <Text style={styles.rideDescription}>
                      Your Ride, Your Money{'\n'}Their Livelihood
                    </Text>
                  </View>
                  <View style={styles.rideCardImageSection}>
                    <Image
                      source={require('./assets/ridenowsvg.svg')}
                      style={styles.rideCardImage}
                      resizeMode="contain"
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </Animated.View>

            {/* Hourly & C2C Row */}
            <Animated.View style={[styles.rideRow, getCardStyle(card2Anim)]}>
              <TouchableOpacity
                style={styles.rideCardSmall}
                onPress={() => handleRideType('hourly')}
                activeOpacity={0.9}
              >
                <View style={styles.rideCardHeader}>
                  <View
                    style={[
                      styles.rideIndicator,
                      styles.rideIndicatorSecondary,
                    ]}
                  />
                  <Text style={styles.rideTitleSmall}>Hourly</Text>
                </View>
                <Text style={styles.rideDescription}>
                  Planned Hours,{'\n'}Trusted Rides
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.rideCardSmall}
                onPress={() => handleRideType('c2c')}
                activeOpacity={0.9}
              >
                <View style={styles.rideCardHeader}>
                  <View
                    style={[
                      styles.rideIndicator,
                      styles.rideIndicatorSecondary,
                    ]}
                  />
                  <Text style={styles.rideTitleSmall}>C2C</Text>
                </View>
                <Text style={styles.rideDescription}>
                  City-To-City,{'\n'}Pre Booked
                </Text>
              </TouchableOpacity>
            </Animated.View>

            {/* Schedule - Featured */}
            <Animated.View style={getCardStyle(card3Anim)}>
              <TouchableOpacity
                style={[styles.rideCard, styles.rideCardFeatured]}
                onPress={() => handleRideType('schedule')}
                activeOpacity={0.9}
              >
                <View style={styles.rideCardContent}>
                  <View style={styles.rideCardTextSection}>
                    <View style={styles.rideCardHeader}>
                      <View style={styles.rideIndicator} />
                      <Text style={styles.rideTitle}>Schedule</Text>
                    </View>
                    <Text style={styles.rideTagline}>Ride. Reserved.</Text>
                    <Text style={styles.rideDescription}>
                      Your Daily Commute,{'\n'}Perfectly Scheduled
                    </Text>
                  </View>
                  <View style={styles.rideCardImageSection}>
                    <Image
                      source={require('./assets/map.svg')}
                      style={styles.rideCardImage}
                      resizeMode="contain"
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </Animated.View>
          </View>
          {/* Discover Section */}
          <SmartSuggestionsCarousel
            title="DISCOVER"
            categories={suggestionCategories}
          />
        </ScrollView>
      </Animated.View>
    </View>
  );
};

export default NewRiderHomescreen;
