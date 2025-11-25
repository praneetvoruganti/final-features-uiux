import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
// Icon removed - using text-based alternatives
import Animated, {
  FadeInDown,
  FadeInUp,
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import styles from './styles';

const SingleStopView = ({ data, fare }) => {
  const pulseScale = useSharedValue(1);

  useEffect(() => {
    pulseScale.value = withRepeat(
      withSequence(
        withTiming(1.15, { duration: 1000 }),
        withTiming(1, { duration: 1000 }),
      ),
      -1,
      false,
    );
  }, []);

  const pulseStyle = useAnimatedStyle(() => ({
    transform: [{ scale: pulseScale.value }],
  }));

  return (
    <View style={styles.routeCard}>
      {/* From Section */}
      <Animated.View
        entering={FadeInDown.delay(100).duration(400).springify()}
        style={styles.routeSection}
      >
        <View style={styles.routeHeader}>
          <Text style={styles.routeLabel}>Pickup Location</Text>
        </View>
        <View style={styles.addressContainer}>
          <View style={styles.locationDot} />
          <Text style={styles.addressText}>{data.from}</Text>
        </View>
      </Animated.View>

      {/* Arrow Indicator */}
      <Animated.View
        entering={FadeInDown.delay(200).duration(400).springify()}
        style={styles.arrowContainer}
      >
        <View style={styles.dashedLine} />
        <Animated.View style={[styles.arrowCircle, pulseStyle]}>
          <Text style={styles.arrowText}>↓</Text>
        </Animated.View>
        <View style={styles.dashedLine} />
      </Animated.View>

      {/* To Section */}
      <Animated.View
        entering={FadeInDown.delay(300).duration(400).springify()}
        style={styles.routeSection}
      >
        <View style={styles.routeHeader}>
          <Text style={styles.routeLabel}>Drop Location</Text>
        </View>
        <View style={styles.addressContainer}>
          <View style={[styles.locationDot, styles.locationDotDestination]} />
          <Text style={styles.addressText}>{data.to}</Text>
        </View>
      </Animated.View>

      {/* Fare Section */}
      <Animated.View entering={FadeInUp.delay(400).duration(400).springify()}>
        <View style={styles.fareSeparator} />
        <View style={styles.fareSection}>
          <Text style={styles.fareLabel}>Total Fare</Text>
          <Text style={styles.fareValue}>{fare}</Text>
        </View>
      </Animated.View>
    </View>
  );
};

export default SingleStopView;
