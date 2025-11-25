import React, { useEffect, useRef, useState } from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  Animated,
  Easing,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import {
  premiumStyles,
  colors,
  typography,
  componentStyles as styles,
} from './styles';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const tips = [
  'Verified drivers. Because vibes alone aren’t enough.',
  'No surge pricing. Rain is stressful enough already.',
  'Schedule a ride now, thank yourself later.',
  'Hourly rentals: like having a driver on speed-dial.',
  'Every driver sees your request. No algorithm drama.',
  'Your fare is final. No math surprises mid-ride.',
  'Intercity trips, minus the cousin who always cancels last minute.',
  'Multiple stops? Add them. Call it an errand run, not a ride.',
  'Airport rides without the airport chaos. Almost.',
  'Drivers keep 100% of their earnings. Good karma for your trip.',
  'Metro pairs perfectly with short trips.',
  'We connect people, not just pins on a map.',
];

const SearchM = ({ isVisible, onClose }) => {
  const [timeRemaining, setTimeRemaining] = useState(180); // 5 minutes
  const [currentTipIndex, setCurrentTipIndex] = useState(0);
  const [isCancelModalVisible, setCancelModalVisible] = useState(false);

  // Animation Refs
  const modalOpacity = useRef(new Animated.Value(0)).current;
  const modalScale = useRef(new Animated.Value(0.95)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const tipOpacity = useRef(new Animated.Value(1)).current;
  const cancelModalOpacity = useRef(new Animated.Value(0)).current;
  const cancelModalScale = useRef(new Animated.Value(0.95)).current;

  useEffect(() => {
    let countdownTimer;
    let tipInterval;

    if (isVisible) {
      // Reset state
      setTimeRemaining(180);
      setCancelModalVisible(false);
      setCurrentTipIndex(0);

      // Entry animations
      Animated.parallel([
        Animated.timing(modalOpacity, {
          toValue: 1,
          duration: 180,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
        Animated.spring(modalScale, {
          toValue: 1,
          speed: 12,
          bounciness: 6,
          useNativeDriver: true,
        }),
      ]).start();

      // Pulse animation
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1.1,
            duration: 800,
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
          }),
        ]),
      ).start();

      // Countdown logic
      countdownTimer = setInterval(() => {
        setTimeRemaining(prev => (prev > 0 ? prev - 1 : 0));
      }, 1000);

      // Tip rotation
      tipInterval = setInterval(() => {
        Animated.timing(tipOpacity, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }).start(() => {
          setCurrentTipIndex(prev => (prev + 1) % tips.length);
          Animated.timing(tipOpacity, {
            toValue: 1,
            duration: 180,
            useNativeDriver: true,
          }).start();
        });
      }, 3500);
    } else {
      // Reset animations
      modalOpacity.setValue(0);
      modalScale.setValue(0.95);
      pulseAnim.setValue(1);
    }

    return () => {
      clearInterval(countdownTimer);
      clearInterval(tipInterval);
    };
  }, [isVisible]);

  const formatTime = seconds => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleOpenCancelModal = () => {
    setCancelModalVisible(true);
    Animated.parallel([
      Animated.timing(cancelModalOpacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.spring(cancelModalScale, {
        toValue: 1,
        speed: 12,
        bounciness: 6,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleCloseCancelModal = shouldCloseMain => {
    Animated.timing(cancelModalOpacity, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      setCancelModalVisible(false);
      cancelModalScale.setValue(0.95);
      if (shouldCloseMain) {
        onClose();
      }
    });
  };

  const renderCancelModal = () => (
    <Modal
      transparent
      visible={isCancelModalVisible}
      animationType="none"
      onRequestClose={() => handleCloseCancelModal(false)}
    >
      <Animated.View
        style={[premiumStyles.modalContainer, { opacity: cancelModalOpacity }]}
      >
        <Animated.View
          style={[
            premiumStyles.modalView,
            { transform: [{ scale: cancelModalScale }] },
          ]}
        >
          <View style={premiumStyles.header}>
            <Text style={typography.title2}>Cancel Search?</Text>
            <Text
              style={[typography.body, { textAlign: 'center', marginTop: 8 }]}
            >
              We're working on finding you a ride. Are you sure you want to
              stop?
            </Text>
          </View>
          <View style={{ marginTop: 24 }}>
            <TouchableOpacity
              style={premiumStyles.buttonPrimary}
              onPress={() => handleCloseCancelModal(true)}
              activeOpacity={0.8}
            >
              <Text style={premiumStyles.buttonPrimaryText}>Yes, Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[premiumStyles.buttonTertiary, { marginTop: 8 }]}
              onPress={() => handleCloseCancelModal(false)}
            >
              <Text style={premiumStyles.buttonTertiaryText}>
                Keep Searching
              </Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </Animated.View>
    </Modal>
  );

  return (
    <Modal
      transparent
      visible={isVisible}
      animationType="none"
      onRequestClose={handleOpenCancelModal}
    >
      <Animated.View
        style={[premiumStyles.modalContainer, { opacity: modalOpacity }]}
      >
        <Animated.View
          style={[
            premiumStyles.modalView,
            styles.modalView,
            { transform: [{ scale: modalScale }] },
          ]}
        >
          <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
            <View style={premiumStyles.header}>
              <Animated.View
                style={[
                  premiumStyles.headerIconWrapper,
                  styles.pulseIcon,
                  { transform: [{ scale: pulseAnim }] },
                ]}
              >
                <Text style={{ fontSize: 32 }}>🔍</Text>
              </Animated.View>
              <Text style={typography.title1}>Finding Your Ride</Text>
              <Text
                style={[typography.body, { marginTop: 8, textAlign: 'center' }]}
              >
                Connecting you with the best drivers nearby.
              </Text>
            </View>

            <View style={styles.timerContainer}>
              <Text style={typography.caption}>SEARCHING FOR</Text>
              <Text style={styles.timerText}>{formatTime(timeRemaining)}</Text>
              <View style={styles.timerTrack}>
                <Animated.View
                  style={[
                    styles.timerBar,
                    {
                      width: new Animated.Value(timeRemaining).interpolate({
                        inputRange: [0, 180],
                        outputRange: ['0%', '100%'],
                      }),
                    },
                  ]}
                />
              </View>
            </View>

            <View style={styles.tipBox}>
              <Text style={{ fontSize: 20, marginRight: 12 }}>💡</Text>
              <Animated.Text
                style={[
                  typography.subhead,
                  styles.tipText,
                  { opacity: tipOpacity },
                ]}
              >
                {tips[currentTipIndex]}
              </Animated.Text>
            </View>

            <TouchableOpacity
              style={[premiumStyles.buttonSecondary, { marginTop: 24 }]}
              onPress={handleOpenCancelModal}
              activeOpacity={0.8}
            >
              <Text style={premiumStyles.buttonSecondaryText}>Cancel</Text>
            </TouchableOpacity>
          </ScrollView>
        </Animated.View>
      </Animated.View>
      {renderCancelModal()}
    </Modal>
  );
};

export default SearchM;
