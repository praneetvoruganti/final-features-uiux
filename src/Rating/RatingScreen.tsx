import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withSequence,
  withTiming,
  ZoomIn,
} from 'react-native-reanimated';
import { colors, typography, premiumStyles } from '../FinalCarousel/styles/premiumStyles';

interface RatingScreenProps {
  isVisible?: boolean;
  onClose?: () => void;
  onSubmit?: (rideRating: number, driverRating: number) => void;
}

const Star = ({
  filled,
  onPress,
  size = 32,
}: {
  filled: boolean;
  onPress: () => void;
  size?: number;
}) => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const handlePress = () => {
    scale.value = withSequence(
      withTiming(1.2, { duration: 100 }),
      withSpring(1, { damping: 10, stiffness: 100 })
    );
    onPress();
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={handlePress}>
      <Animated.Text
        style={[
          styles.star,
          { 
            fontSize: size, 
            color: filled ? colors.secondary : colors.placeholder 
          },
          animatedStyle,
        ]}
      >
        {filled ? '★' : '☆'}
      </Animated.Text>
    </TouchableOpacity>
  );
};

const RatingSection = ({
  title,
  rating,
  setRating,
}: {
  title: string;
  rating: number;
  setRating: (r: number) => void;
}) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.starsContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            filled={star <= rating}
            onPress={() => setRating(star)}
          />
        ))}
      </View>
    </View>
  );
};

const RatingScreen: React.FC<RatingScreenProps> = ({
  isVisible = true,
  onClose,
  onSubmit,
}) => {
  const [rideRating, setRideRating] = useState(0);
  const [driverRating, setDriverRating] = useState(0);

  const handleSubmit = () => {
    console.log('Submitted:', { rideRating, driverRating });
    if (onSubmit) onSubmit(rideRating, driverRating);
    if (onClose) onClose();
  };

  return (
    <View style={premiumStyles.modalContainer}>
      <Animated.View entering={ZoomIn.duration(300)} style={[premiumStyles.modalView, styles.cardOverride]}>
        {/* Header */}
        <View style={styles.header}>
          <View style={{ width: 40 }} /> 
          <Text style={[typography.title3, { textAlign: 'center' }]}>Feedback</Text>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.skipButton}>SKIP</Text>
          </TouchableOpacity>
        </View>

        {/* Content */}
        <View style={styles.content}>
          <RatingSection
            title="RATE YOUR RIDE EXPERIENCE"
            rating={rideRating}
            setRating={setRideRating}
          />

          <RatingSection
            title="RATE YOUR DRIVER"
            rating={driverRating}
            setRating={setDriverRating}
          />
        </View>

        {/* Submit Button */}
        <TouchableOpacity
          style={[premiumStyles.buttonPrimary, styles.submitButton]}
          onPress={handleSubmit}
          activeOpacity={0.8}
        >
          <Text style={premiumStyles.buttonPrimaryText}>SUBMIT</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardOverride: {
    width: '85%',
    paddingVertical: 32,
    minHeight: 480,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 32,
  },
  skipButton: {
    ...typography.caption,
    color: colors.textTertiary,
    fontWeight: '600',
    letterSpacing: 1,
  },
  content: {
    width: '100%',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  section: {
    marginBottom: 40,
    alignItems: 'center',
    width: '100%',
  },
  sectionTitle: {
    ...typography.caption,
    color: colors.textSecondary,
    marginBottom: 16,
    letterSpacing: 1.5,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: '700',
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
  },
  star: {
    textShadowColor: 'rgba(0, 0, 0, 0.05)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  submitButton: {
    width: '100%',
    marginTop: 24,
  },
});

export default RatingScreen;
