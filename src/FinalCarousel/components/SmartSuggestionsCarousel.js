import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withSequence,
  withTiming,
  withDelay,
  runOnJS,
  Easing,
} from 'react-native-reanimated';
import {
  carouselStyles,
  CAROUSEL_SNAP_INTERVAL,
} from '../styles/carouselStyles';
import CarouselCard from './CarouselCard';

const { width: screenWidth } = Dimensions.get('window');

const SPRING_CONFIG = {
  damping: 28,
  stiffness: 400,
  mass: 0.6,
};

const EASING_CONFIG = {
  duration: 350,
  easing: Easing.bezier(0.25, 0.1, 0.25, 1),
};

// Create animated TouchableOpacity
const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

// Premium AnimatedCarouselItem with smooth entrance
const AnimatedCarouselItem = React.memo(
  ({
    item,
    index,
    springConfig,
    isExpanded,
    isQuickGuide,
    onPress,
    categoryId,
  }) => {
    const opacity = useSharedValue(1);
    const translateY = useSharedValue(0);
    const scale = useSharedValue(1);
    const hasAnimatedRef = React.useRef(false);

    // Elegant entrance animation - only on first mount
    useEffect(() => {
      if (!hasAnimatedRef.current) {
        opacity.value = 0;
        translateY.value = 20;
        scale.value = 0.95;

        const delay = index * 60;
        translateY.value = withDelay(delay, withTiming(0, EASING_CONFIG));
        opacity.value = withDelay(delay, withTiming(1, { duration: 400 }));
        scale.value = withDelay(delay, withSpring(1, springConfig));

        hasAnimatedRef.current = true;
      }
    }, []);

    // Instantly show cards on category change (no animation)
    React.useLayoutEffect(() => {
      if (hasAnimatedRef.current) {
        // Skip animation, just set to visible state
        opacity.value = 1;
        translateY.value = 0;
        scale.value = 1;
      }
    }, [categoryId]);

    const animatedStyle = useAnimatedStyle(() => {
      return {
        opacity: opacity.value,
        transform: [{ translateY: translateY.value }, { scale: scale.value }],
      };
    }, []);

    return (
      <CarouselCard
        item={item}
        animatedStyle={animatedStyle}
        isExpanded={isExpanded}
        isQuickGuide={isQuickGuide}
        onPress={onPress}
      />
    );
  },
  (prevProps, nextProps) => {
    // Custom comparison to prevent unnecessary re-renders
    return (
      prevProps.item.id === nextProps.item.id &&
      prevProps.index === nextProps.index &&
      prevProps.springConfig === nextProps.springConfig &&
      prevProps.isExpanded === nextProps.isExpanded &&
      prevProps.isQuickGuide === nextProps.isQuickGuide &&
      prevProps.categoryId === nextProps.categoryId
    );
  },
);

// Sophisticated pill component with refined animations
const PillButton = React.memo(
  ({ item, isActive, onPress }) => {
    const scale = useSharedValue(1);
    const opacity = useSharedValue(isActive ? 1 : 0.9);

    // Smooth transition on active state change
    useEffect(() => {
      if (isActive) {
        scale.value = withSequence(
          withTiming(1.05, { duration: 120 }),
          withSpring(1, SPRING_CONFIG),
        );
        opacity.value = withTiming(1, { duration: 200 });
      } else {
        scale.value = withTiming(1, { duration: 200 });
        opacity.value = withTiming(0.9, { duration: 200 });
      }
    }, [isActive]);

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ scale: scale.value }],
      opacity: opacity.value,
    }));

    const handlePressIn = () => {
      scale.value = withTiming(0.95, { duration: 100 });
    };

    const handlePressOut = () => {
      scale.value = withSpring(1, SPRING_CONFIG);
    };

    return (
      <AnimatedTouchableOpacity
        style={[
          carouselStyles.pillButton,
          isActive && carouselStyles.pillButtonActive,
          animatedStyle,
        ]}
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={0.8}
      >
        <Text
          style={[
            carouselStyles.pillText,
            isActive && carouselStyles.pillTextActive,
          ]}
        >
          {item.title}
        </Text>
      </AnimatedTouchableOpacity>
    );
  },
  (prevProps, nextProps) => {
    // Only re-render if active state or item changes
    return (
      prevProps.isActive === nextProps.isActive &&
      prevProps.item.id === nextProps.item.id &&
      prevProps.item.title === nextProps.item.title
    );
  },
);

const SmartSuggestionsCarousel = ({ title, categories }) => {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [expandedCardId, setExpandedCardId] = useState(null);
  const flatListRef = useRef(null);
  const categoryOpacity = useSharedValue(1);

  // Memoized category data to prevent unnecessary re-renders
  const activeCards = React.useMemo(() => {
    return categories.find(c => c.id === activeCategory)?.cards || [];
  }, [categories, activeCategory]);

  // Check if current category is Quick Guides (expandable)
  const isQuickGuidesActive = activeCategory === 'app_guides';

  // Wrap state updates in runOnJS to avoid UI thread issues
  const updateCategory = React.useCallback(categoryId => {
    setActiveCategory(categoryId);
    setIsTransitioning(false);
    // Reset expanded state when changing categories
    setExpandedCardId(null);
    // Reset scroll to start after category change
    setTimeout(() => {
      flatListRef.current?.scrollToOffset({ offset: 0, animated: false });
    }, 50);
  }, []);

  const handlePillPress = React.useCallback(
    (category, index) => {
      if (isTransitioning || category.id === activeCategory) return;

      setIsTransitioning(true);

      // Premium smooth transition with optimized timing
      categoryOpacity.value = withTiming(
        0,
        { duration: 180, easing: Easing.in(Easing.ease) },
        finished => {
          if (finished) {
            runOnJS(updateCategory)(category.id);
            categoryOpacity.value = withTiming(1, {
              duration: 320,
              easing: Easing.out(Easing.ease),
            });
          }
        },
      );
    },
    [isTransitioning, activeCategory, categoryOpacity, updateCategory],
  );

  const carouselAnimatedStyle = useAnimatedStyle(() => ({
    opacity: categoryOpacity.value,
  }));

  // Handle card expand/collapse for Quick Guides
  const handleCardPress = React.useCallback(
    item => {
      if (isQuickGuidesActive && item.expandable) {
        setExpandedCardId(expandedCardId === item.id ? null : item.id);
      }
    },
    [isQuickGuidesActive, expandedCardId],
  );

  // Optimized renderItem with proper memoization
  const renderItem = React.useCallback(
    ({ item, index }) => (
      <AnimatedCarouselItem
        item={item}
        index={index}
        springConfig={SPRING_CONFIG}
        isExpanded={expandedCardId === item.id}
        isQuickGuide={isQuickGuidesActive && item.expandable}
        onPress={() => handleCardPress(item)}
        categoryId={activeCategory}
      />
    ),
    [expandedCardId, isQuickGuidesActive, handleCardPress, activeCategory],
  );

  // Optimized getItemLayout for better scrolling performance
  const getItemLayout = React.useCallback(
    (data, index) => ({
      length: CAROUSEL_SNAP_INTERVAL,
      offset: CAROUSEL_SNAP_INTERVAL * index,
      index,
    }),
    [],
  );

  // Memoized keyExtractor to prevent re-renders
  const keyExtractor = React.useCallback(
    item =>
      `${activeCategory}-${item.id}-${
        expandedCardId === item.id ? 'expanded' : 'collapsed'
      }`,
    [activeCategory, expandedCardId],
  );
  const pillKeyExtractor = React.useCallback(item => item.id, []);

  return (
    <View style={carouselStyles.container}>
      <Text style={carouselStyles.title}>{title}</Text>

      <FlatList
        horizontal
        data={categories}
        renderItem={({ item, index }) => (
          <PillButton
            item={item}
            isActive={activeCategory === item.id}
            onPress={() => handlePillPress(item, index)}
          />
        )}
        keyExtractor={pillKeyExtractor}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={carouselStyles.pillsContainer}
        removeClippedSubviews={false}
        scrollEventThrottle={16}
        decelerationRate="normal"
        maxToRenderPerBatch={10}
        windowSize={10}
      />

      <Animated.View style={carouselAnimatedStyle}>
        <FlatList
          ref={flatListRef}
          data={activeCards}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={carouselStyles.carouselContentContainer}
          snapToInterval={CAROUSEL_SNAP_INTERVAL}
          snapToAlignment="start"
          decelerationRate="fast"
          pagingEnabled={false}
          getItemLayout={getItemLayout}
          removeClippedSubviews={false}
          maxToRenderPerBatch={3}
          initialNumToRender={2}
          windowSize={3}
          updateCellsBatchingPeriod={100}
          scrollEventThrottle={16}
          maintainVisibleContentPosition={null}
          disableIntervalMomentum={true}
          ListEmptyComponent={React.memo(() => (
            <View style={carouselStyles.emptyContainer}>
              <Text style={carouselStyles.emptyText}>
                No suggestions available
              </Text>
            </View>
          ))}
        />
      </Animated.View>
    </View>
  );
};

export default SmartSuggestionsCarousel;
