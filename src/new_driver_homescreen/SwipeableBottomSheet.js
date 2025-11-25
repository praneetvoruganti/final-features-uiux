import React, { useRef, useEffect } from 'react';
import {
  View,
  Animated,
  PanResponder,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const SwipeableBottomSheet = ({ 
  children, 
  snapPoints = [0.35, 0.75], // Percentages of screen height
  initialSnap = 0,
  style,
}) => {
  const snapPositions = snapPoints.map(point => SCREEN_HEIGHT * (1 - point));
  const translateY = useRef(new Animated.Value(snapPositions[initialSnap])).current;
  const lastGestureDy = useRef(snapPositions[initialSnap]);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return Math.abs(gestureState.dy) > 10;
      },
      onPanResponderGrant: () => {
        translateY.setOffset(lastGestureDy.current);
        translateY.setValue(0);
      },
      onPanResponderMove: (_, gestureState) => {
        translateY.setValue(gestureState.dy);
      },
      onPanResponderRelease: (_, gestureState) => {
        translateY.flattenOffset();
        
        const currentPosition = lastGestureDy.current + gestureState.dy;
        
        // Find closest snap point
        let closestSnapPoint = snapPositions[0];
        let minDistance = Math.abs(currentPosition - snapPositions[0]);
        
        snapPositions.forEach(snapPoint => {
          const distance = Math.abs(currentPosition - snapPoint);
          if (distance < minDistance) {
            minDistance = distance;
            closestSnapPoint = snapPoint;
          }
        });

        lastGestureDy.current = closestSnapPoint;

        Animated.spring(translateY, {
          toValue: closestSnapPoint,
          useNativeDriver: true,
          damping: 20,
          stiffness: 200,
        }).start();
      },
    })
  ).current;

  useEffect(() => {
    Animated.spring(translateY, {
      toValue: snapPositions[initialSnap],
      useNativeDriver: true,
      damping: 20,
      stiffness: 200,
    }).start();
    lastGestureDy.current = snapPositions[initialSnap];
  }, []);

  return (
    <Animated.View
      style={[
        {
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          transform: [{ translateY }],
        },
        style,
      ]}
      {...panResponder.panHandlers}
    >
      {children}
    </Animated.View>
  );
};

export default SwipeableBottomSheet;
