import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { carouselStyles as styles } from '../styles/carouselStyles';

// Enable LayoutAnimation for Android
if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

// Premium color schemes for different categories - sophisticated solid colors
const iconConfig = {
  star: { color: '#EE436E', letter: '*' },
};

const SPRING_CONFIG = {
  damping: 25,
  stiffness: 350,
  mass: 0.5,
};

const LAYOUT_ANIMATION = {
  duration: 400,
  create: {
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity,
  },
  update: {
    type: LayoutAnimation.Types.easeInEaseOut,
  },
};

const CarouselCard = ({
  item,
  animatedStyle,
  isExpanded = false,
  isQuickGuide = false,
  onPress,
}) => {
  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);

  const handlePress = () => {
    if (isQuickGuide && item.expandable) {
      LayoutAnimation.configureNext(LAYOUT_ANIMATION);
    }
    onPress?.();
  };

  const handlePressIn = () => {
    scale.value = withTiming(0.97, {
      duration: 150,
      easing: Easing.out(Easing.ease),
    });
    opacity.value = withTiming(0.9, { duration: 150 });
  };

  const handlePressOut = () => {
    scale.value = withSpring(1, SPRING_CONFIG);
    opacity.value = withTiming(1, { duration: 200 });
  };

  const animatedCardStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
      opacity: opacity.value,
    };
  });

  // Get icon configuration
  const iconInfo = iconConfig[item.icon] || { color: '#667eea', letter: '?' };

  // Choose container style based on expansion state
  const containerStyle = isExpanded
    ? styles.expandedContainer
    : styles.itemContainer;

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={handlePress}
    >
      <Animated.View
        style={[
          containerStyle,
          animatedStyle,
          animatedCardStyle,
          isQuickGuide && !isExpanded && styles.expandableCardAccent, // Left accent for expandable cards
        ]}
      >
        {/* Expand Indicator */}
        {isQuickGuide && (
          <View style={styles.expandIndicator}>
            <Text style={[styles.expandIcon, { fontSize: 12 }]}>
              {isExpanded ? '−' : '+'}
            </Text>
          </View>
        )}

        {/* Premium Icon */}
        {item.icon !== false && (
          <View
            style={[
              styles.cardIconContainer,
              { backgroundColor: iconInfo.color },
            ]}
          >
            <Text style={styles.cardIcon}>{iconInfo.letter}</Text>
          </View>
        )}

        {/* Premium Title */}
        <Text style={styles.itemTitle} numberOfLines={isExpanded ? 2 : 3}>
          {item.title}
        </Text>

        {/* Refined Description */}
        <Text style={styles.itemDescription} numberOfLines={isExpanded ? 0 : 3}>
          {item.description}
        </Text>

        {/* Premium Expanded Content */}
        {isExpanded && item.detailedGuide && (
          <View style={styles.detailedGuideContainer}>
            {/* Steps Section */}
            <View style={styles.guideStepsContainer}>
              <Text style={styles.guideStepsTitle}>Step by Step</Text>
              {item.detailedGuide.steps.map((step, index) => (
                <Text key={index} style={styles.guideStep}>
                  {step}
                </Text>
              ))}
            </View>

            {/* Tips Section */}
            <View style={styles.guideTipsContainer}>
              <Text style={styles.guideTipsTitle}>Pro Tips</Text>
              {item.detailedGuide.tips.map((tip, index) => (
                <Text key={index} style={styles.guideTip}>
                  {tip}
                </Text>
              ))}
            </View>

            {/* Collapse Button */}
            <TouchableOpacity
              style={styles.collapseButton}
              onPress={handlePress}
              activeOpacity={0.8}
            >
              <Text style={styles.collapseButtonText}>Collapse</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Bottom Section for Non-Expanded Cards */}
        {!isExpanded && (
          <View style={styles.cardBottomSection}>
            {item.highlight ? (
              <View style={styles.highlightBadge}>
                <Text style={styles.highlightText}>{item.highlight}</Text>
              </View>
            ) : isQuickGuide ? (
              <Text style={styles.expandableTapHint}>Read more</Text>
            ) : null}
          </View>
        )}
      </Animated.View>
    </TouchableOpacity>
  );
};

export default CarouselCard;
