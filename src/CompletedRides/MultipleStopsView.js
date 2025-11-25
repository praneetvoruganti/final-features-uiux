import React from 'react';
import { View, Text } from 'react-native';
// Icon removed - using text-based alternatives
import Animated, {
  FadeInDown,
  FadeInUp,
  SlideInRight,
} from 'react-native-reanimated';
import styles from './styles';

const MultipleStopsView = ({ stops, fare }) => {
  return (
    <View style={styles.routeCard}>
      {stops.map((stop, index) => (
        <Animated.View
          key={stop.id}
          entering={FadeInDown.delay(index * 80)
            .springify()
            .damping(20)
            .stiffness(300)}
        >
          <View style={styles.stopContainer}>
            {/* Stop Header */}
            <Animated.View
              entering={SlideInRight.delay(index * 80 + 50).duration(300)}
              style={styles.stopHeader}
            >
              <Text style={styles.stopTitle}>STOP {stop.id}</Text>
            </Animated.View>

            {/* From Address */}
            <Animated.View
              entering={FadeInDown.delay(index * 80 + 100).duration(400)}
              style={styles.stopAddressContainer}
            >
              <View style={styles.locationDot} />
              <Text style={styles.stopAddressText}>{stop.from}</Text>
            </Animated.View>

            {/* Arrow */}
            <View style={styles.stopArrowContainer}>
              <Text style={styles.arrowText}>↓</Text>
            </View>

            {/* To Address */}
            <Animated.View
              entering={FadeInDown.delay(index * 80 + 150).duration(400)}
              style={styles.stopAddressContainer}
            >
              <View
                style={[styles.locationDot, styles.locationDotDestination]}
              />
              <Text style={styles.stopAddressText}>{stop.to}</Text>
            </Animated.View>

            {/* Separator between stops */}
            {index < stops.length - 1 && (
              <Animated.View
                entering={FadeInDown.delay(index * 80 + 200).duration(300)}
              >
                <View style={styles.stopSeparator} />
              </Animated.View>
            )}
          </View>
        </Animated.View>
      ))}

      {/* Fare Section */}
      <Animated.View
        entering={FadeInUp.delay(stops.length * 80 + 200)
          .duration(400)
          .springify()}
      >
        <View style={styles.fareSeparator} />
        <View style={styles.fareSection}>
          <Text style={styles.fareLabel}>Total Fare</Text>
          <Text style={styles.fareValue}>{fare}</Text>
        </View>
      </Animated.View>
    </View>
  );
};

export default MultipleStopsView;
