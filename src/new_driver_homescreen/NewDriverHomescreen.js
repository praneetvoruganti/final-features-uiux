import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  Switch,
  TouchableOpacity,
  Image,
  Animated,
  ToastAndroid,
  Platform,
  Alert,
  Modal,
  ScrollView,
} from 'react-native';
import SwipeableBottomSheet from './SwipeableBottomSheet';
import styles from './styles';

const NewDriverHomescreen = ({ onMenuPress }) => {
  const [isOnDuty, setIsOnDuty] = useState(true);
  const [showOfflineModal, setShowOfflineModal] = useState(false);

  // Animation values
  const statusPulse = useRef(new Animated.Value(1)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const modalAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Entrance animations
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();

    // Subtle pulse animation for online status
    if (isOnDuty) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(statusPulse, {
            toValue: 1.08,
            duration: 1200,
            useNativeDriver: true,
          }),
          Animated.timing(statusPulse, {
            toValue: 1,
            duration: 1200,
            useNativeDriver: true,
          }),
        ]),
      ).start();
    }
  }, [isOnDuty]);

  const showToast = message => {
    if (Platform.OS === 'android') {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    } else {
      Alert.alert('Success', message);
    }
  };

  const handleDutyToggle = () => {
    if (isOnDuty) {
      // Show resistance when going offline
      setShowOfflineModal(true);
      modalAnim.setValue(0);
      Animated.spring(modalAnim, {
        toValue: 1,
        useNativeDriver: true,
        damping: 20,
        stiffness: 300,
      }).start();
    } else {
      // Go online immediately
      setIsOnDuty(true);
      showToast("You're now Online!");
    }
  };

  const confirmGoOffline = () => {
    Animated.timing(modalAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      setShowOfflineModal(false);
      setIsOnDuty(false);
      showToast("You're now Offline");
    });
  };

  const cancelGoOffline = () => {
    Animated.timing(modalAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      setShowOfflineModal(false);
    });
  };

  const handleMenu = () => {
    if (onMenuPress) {
      onMenuPress();
    }
  };

  const handleRecenter = () => {
    showToast('Map recentered');
  };

  const handleRecharge = () => {
    showToast('Opening recharge options');
  };

  const handleProfilePress = () => {
    showToast('Opening profile');
  };

  const handleStatsPress = type => {
    showToast(`Viewing ${type} details`);
  };

  const handleScheduledRides = () => {
    showToast('Opening scheduled rides');
  };

  return (
    <View style={styles.container}>
      {/* Map Background - Uncluttered */}
      <View style={styles.mapPlaceholder}>
        <Text style={styles.mapText}>Map View</Text>
      </View>

      {/* Premium Header */}
      <Animated.View style={[styles.header, { opacity: fadeAnim }]}>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={handleMenu}
          activeOpacity={0.7}
        >
          <Text style={styles.headerButtonText}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Driver Home</Text>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={handleRecenter}
          activeOpacity={0.7}
        >
          <Text style={styles.headerButtonIcon}>⊙</Text>
        </TouchableOpacity>
      </Animated.View>

      {/* Swipeable Bottom Sheet with All Content */}
      <SwipeableBottomSheet snapPoints={[0.4, 0.85]} initialSnap={0}>
        <View style={styles.bottomSheet}>
          <View style={styles.handle} />

          <ScrollView
            contentContainerStyle={styles.sheetContent}
            showsVerticalScrollIndicator={false}
            bounces={true}
          >
            {/* Status Toggle - PRIMARY */}
            <Animated.View style={{ opacity: fadeAnim }}>
              <View style={styles.statusCard}>
                <View style={styles.statusRow}>
                  <View style={styles.statusInfo}>
                    <View style={styles.statusTitleRow}>
                      <Animated.View
                        style={[
                          styles.statusDot,
                          isOnDuty ? styles.dotOnline : styles.dotOffline,
                          isOnDuty && { transform: [{ scale: statusPulse }] },
                        ]}
                      />
                      <Text style={styles.statusTitle}>
                        {isOnDuty ? 'Online' : 'Offline'}
                      </Text>
                    </View>
                    <Text style={styles.statusSubtitle}>
                      {isOnDuty
                        ? 'Ready to accept rides'
                        : 'You will not receive ride requests'}
                    </Text>
                  </View>
                  <Switch
                    trackColor={{ false: '#D1D1D6', true: '#34C759' }}
                    thumbColor="#FEFEFE"
                    ios_backgroundColor="#D1D1D6"
                    onValueChange={handleDutyToggle}
                    value={isOnDuty}
                    style={{ transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }] }}
                  />
                </View>
              </View>
            </Animated.View>

            {/* Wallet Section */}
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>WALLET</Text>
            </View>
            <View style={styles.walletCard}>
              <View style={styles.walletRow}>
                <View>
                  <Text style={styles.walletLabel}>Available Balance</Text>
                  <Text style={styles.walletValue}>₹125.50</Text>
                </View>
                <TouchableOpacity
                  style={styles.rechargeButton}
                  onPress={handleRecharge}
                  activeOpacity={0.8}
                >
                  <Text style={styles.rechargeButtonText}>Add Money</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Scheduled Rides */}
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>BOOKINGS</Text>
            </View>
            <TouchableOpacity
              style={styles.scheduledRidesButton}
              onPress={handleScheduledRides}
              activeOpacity={0.8}
            >
              <View style={styles.scheduledRidesContent}>
                <View style={styles.scheduledRidesInfo}>
                  <Text style={styles.scheduledRidesTitle}>
                    Advance Bookings
                  </Text>
                  <Text style={styles.scheduledRidesSubtitle}>
                    View your scheduled rides
                  </Text>
                </View>
                <View style={styles.scheduledRidesIndicator} />
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </SwipeableBottomSheet>

      {/* Offline Confirmation Modal */}
      <Modal
        visible={showOfflineModal}
        transparent
        animationType="fade"
        onRequestClose={cancelGoOffline}
        statusBarTranslucent
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={cancelGoOffline}
        >
          <Animated.View
            style={[
              styles.modalContainer,
              {
                opacity: modalAnim,
                transform: [
                  {
                    translateY: modalAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [300, 0],
                    }),
                  },
                ],
              },
            ]}
          >
            <TouchableOpacity activeOpacity={1}>
              <View style={styles.modalContent}>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalTitle}>Go Offline?</Text>
                </View>
                <Text style={styles.modalMessage}>
                  You won't receive any ride requests while offline. Are you
                  sure you want to continue?
                </Text>
                <View style={styles.modalButtons}>
                  <TouchableOpacity
                    style={styles.modalButtonCancel}
                    onPress={cancelGoOffline}
                    activeOpacity={0.8}
                  >
                    <Text style={styles.modalButtonCancelText}>
                      Stay Online
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.modalButtonConfirm}
                    onPress={confirmGoOffline}
                    activeOpacity={0.8}
                  >
                    <Text style={styles.modalButtonConfirmText}>
                      Go Offline
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          </Animated.View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default NewDriverHomescreen;
