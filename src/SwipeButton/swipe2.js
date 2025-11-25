import React from 'react';
import { View, Text, StyleSheet, Dimensions, Alert } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  runOnJS,
} from 'react-native-reanimated';
// import LinearGradient from 'react-native-linear-gradient';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');
const BUTTON_WIDTH = width * 0.9; // 90% of screen width
const BUTTON_HEIGHT = 70;
const BUTTON_PADDING = 10;
const SWIPEABLE_DIMENSIONS = BUTTON_HEIGHT - 2 * BUTTON_PADDING;
const H_SWIPE_RANGE = BUTTON_WIDTH - 2 * BUTTON_PADDING - SWIPEABLE_DIMENSIONS;

const colors = {
  primary: '#EE436E',
  secondary: '#FBDA25',
  black: '#201E1E',
  white: '#FEFEFE',
};

const SwipeButton = ({ onSwipeComplete }) => {
  const X = useSharedValue(0);

  const handleComplete = () => {
    Alert.alert(
      'Swipe Complete',
      'Are you sure you want to proceed?',
      [
        {
          text: 'No',
          style: 'cancel',
          onPress: () => (X.value = withSpring(0)),
        },
        { text: 'Yes', style: 'destructive', onPress: () => onSwipeComplete() },
      ],
      { cancelable: false },
    );
  };

  const animatedGestureHandler = event => {
    if (event.nativeEvent.state === State.ACTIVE) {
      X.value = Math.min(
        Math.max(0, event.nativeEvent.translationX),
        H_SWIPE_RANGE,
      );
    } else if (event.nativeEvent.state === State.END) {
      if (X.value < H_SWIPE_RANGE * 0.8) {
        X.value = withSpring(0);
      } else {
        X.value = withSpring(H_SWIPE_RANGE, {}, () => {
          runOnJS(handleComplete)();
        });
      }
    }
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: X.value }],
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      opacity: 1 - X.value / H_SWIPE_RANGE,
      transform: [{ translateX: X.value * 0.5 }],
    };
  });

  return (
    <View style={styles.swipeCont}>
      <PanGestureHandler
        onGestureEvent={animatedGestureHandler}
        onHandlerStateChange={animatedGestureHandler}
      >
        <Animated.View style={styles.swipeable}>
          <Animated.View style={[styles.swipeableIcon, animatedStyle]}>
            {/* <Icon name="diamond-stone" size={30} color={colors.secondary} /> */}
          </Animated.View>
          <Animated.Text style={[styles.swipeText, animatedTextStyle]}>
            SWIPE TO EXPERIENCE
          </Animated.Text>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  swipeCont: {
    width: BUTTON_WIDTH,
    height: BUTTON_HEIGHT,
    alignSelf: 'center',
    borderRadius: BUTTON_HEIGHT / 2,
    overflow: 'hidden',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 12,
    marginVertical: 20,
  },
  swipeable: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  swipeableGradient: {
    width: '100%',
    height: '100%',
    borderRadius: BUTTON_HEIGHT / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  swipeableIcon: {
    position: 'absolute',
    left: BUTTON_PADDING,
    width: SWIPEABLE_DIMENSIONS,
    height: SWIPEABLE_DIMENSIONS,
    borderRadius: SWIPEABLE_DIMENSIONS / 2,
    backgroundColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 3,
    borderColor: colors.secondary,
    borderWidth: 1,
  },
  swipeText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 1.5,
    textAlign: 'center',
    zIndex: 2,
  },
});

export default SwipeButton;
