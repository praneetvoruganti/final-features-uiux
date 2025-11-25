/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import SmartSuggestionsCarousel from './src/FinalCarousel/components/SmartSuggestionsCarousel';
import { suggestionCategories } from './src/FinalCarousel/data/carouselDataClean';

import SearchM from './src/SearchM/SearchM';
import SideMenu from './src/SideMenu/SideMenu';
import NewDriverHomescreen from './src/new_driver_homescreen';
import { RatingScreen } from './src/Rating';
import KarmaBlackjack from './src/KarmaBlackjack/KarmaBlackjack';
import CompletedRides from './src/CompletedRides/CompletedRideScreen';
import DriverMyRides from './src/DriverMyRides/DriverMyRidesScreen';
import DriverProfile from './src/DriverProfile/DriverProfileScreen';
import RiderNotifications from './src/RiderNotifications/RiderNotificationsScreen';
import RiderSrcDest from './src/RiderSrcDest/RiderSrcDestScreen';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  withDelay,
  withSequence,
  Easing,
} from 'react-native-reanimated';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();
  const [isSearchingModalVisible, setSearchingModalVisible] = useState(false);
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [isKarmaVisible, setKarmaVisible] = useState(false);
  const [currentScreen, setCurrentScreen] = useState('home'); // 'home' or 'driver_home'
  const findDriverButtonScale = useSharedValue(1);
  const menuButtonScale = useSharedValue(1);

  const animateButtonPress = (scale: any, callback: () => void) => {
    scale.value = withSequence(
      withTiming(0.95, { duration: 100 }),
      withSpring(1, { damping: 15, stiffness: 400 }),
    );
    setTimeout(callback, 100);
  };

  const HorizontalLine = () => {
    return <View style={styles.line} />;
  };

  const handleMenuItemPress = (item: any) => {
    console.log('Menu item pressed:', item.title);
    setCurrentScreen(item.id);
  };

  const menuButtonAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: menuButtonScale.value }],
  }));

  const buttonAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: findDriverButtonScale.value }],
  }));

  return (
    <>
      {currentScreen === 'home' ? (
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <Animated.View style={menuButtonAnimatedStyle}>
              <TouchableOpacity
                style={styles.menuButton}
                onPress={() =>
                  animateButtonPress(menuButtonScale, () =>
                    setMenuVisible(true),
                  )
                }
                activeOpacity={0.7}
              >
                <View style={styles.hamburger}>
                  <View style={styles.hamburgerLine} />
                  <View style={styles.hamburgerLine} />
                  <View style={styles.hamburgerLine} />
                </View>
              </TouchableOpacity>
            </Animated.View>
            <Text style={styles.appName}>OK2GO - Static Components</Text>
          </View>
          <HorizontalLine />
          {/* Smart Suggestions Carousel Cards*/}
          <SmartSuggestionsCarousel
            title="DISCOVER"
            categories={suggestionCategories}
          />
          <HorizontalLine />

          {/* Find Driver Button */}
          <Animated.View style={[buttonAnimatedStyle, styles.buttonContainer]}>
            <TouchableOpacity
              style={styles.findDriverButton}
              onPress={() =>
                animateButtonPress(findDriverButtonScale, () =>
                  setSearchingModalVisible(true),
                )
              }
              activeOpacity={0.8}
            >
              <View style={styles.buttonContent}>
                <Text style={styles.buttonText}>Find a Driver</Text>
                <Text style={styles.chevronIcon}>›</Text>
              </View>
            </TouchableOpacity>
          </Animated.View>

          {/* Karma Kiosk Button */}
          {/* <View style={styles.karmaButtonContainer}>
            <TouchableOpacity
              style={styles.karmaButton}
              onPress={() => setKarmaVisible(true)}
              activeOpacity={0.8}
            >
              <View>
                <Text style={styles.karmaButtonTitle}>Blackjack*</Text>
                <Text style={styles.karmaButtonSubtitle}>100% Fake</Text>
              </View>
              <Text style={styles.chevronIcon}>›</Text>
            </TouchableOpacity>
          </View> */}
        </ScrollView>
      ) : currentScreen === 'rating' ? (
        <RatingScreen onClose={() => setCurrentScreen('home')} />
      ) : currentScreen === 'completed_rides' ? (
        <CompletedRides
          navigation={{ goBack: () => setCurrentScreen('home') }}
          route={{ params: {} }}
        />
      ) : currentScreen === 'driver_my_rides' ? (
        <DriverMyRides
          navigation={{ goBack: () => setCurrentScreen('home') }}
          route={{ params: {} }}
        />
      ) : currentScreen === 'driver_profile' ? (
        <DriverProfile
          navigation={{ goBack: () => setCurrentScreen('home') }}
          route={{ params: {} }}
        />
      ) : currentScreen === 'rider_notifications' ? (
        <RiderNotifications
          navigation={{ goBack: () => setCurrentScreen('home') }}
          route={{ params: {} }}
        />
      ) : currentScreen === 'rider_src_dest' ? (
        <RiderSrcDest
          navigation={{ goBack: () => setCurrentScreen('home') }}
          route={{ params: {} }}
        />
      ) : (
        <NewDriverHomescreen onMenuPress={() => setMenuVisible(true)} />
      )}

      {/* Search Modal */}
      <SearchM
        isVisible={isSearchingModalVisible}
        onClose={() => setSearchingModalVisible(false)}
      />

      {/* Side Menu Drawer */}
      <SideMenu
        isVisible={isMenuVisible}
        onClose={() => setMenuVisible(false)}
        onMenuItemPress={handleMenuItemPress}
      />

      {/* Karma Blackjack Modal */}
      {/* <KarmaBlackjack
        isVisible={isKarmaVisible}
        onClose={() => setKarmaVisible(false)}
      /> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  contentContainer: {
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 20,
  },
  menuButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: 'rgba(0,0,0,0.04)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  hamburger: {
    width: 20,
    height: 14,
    justifyContent: 'space-between',
  },
  hamburgerLine: {
    width: '100%',
    height: 2,
    backgroundColor: '#201E1E',
    borderRadius: 1,
  },
  appName: {
    fontSize: 28,
    fontWeight: '800',
    color: '#201E1E',
    letterSpacing: -0.5,
    flex: 1,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 24,
    marginTop: 32,
  },
  findDriverButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 24,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.06)',
  },
  karmaButtonContainer: {
    width: '100%',
    paddingHorizontal: 24,
    marginTop: 16,
  },
  karmaButton: {
    backgroundColor: '#F8F9FA',
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.04)',
  },
  karmaButtonIcon: {
    fontSize: 24,
    marginRight: 16,
  },
  karmaButtonTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#201E1E',
  },
  karmaButtonSubtitle: {
    fontSize: 12,
    color: '#666666',
    marginTop: 2,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    fontSize: 22,
    marginRight: 12,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#201E1E',
    letterSpacing: 0.3,
  },
  chevronIcon: {
    fontSize: 24,
    color: '#201E1E',
    marginLeft: 8,
    opacity: 0.4,
  },
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 10,
  },
});

export default App;
