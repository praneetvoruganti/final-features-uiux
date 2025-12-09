import React, { useEffect, useRef } from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
  ScrollView,
  StatusBar,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './styles';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const DRAWER_WIDTH = SCREEN_WIDTH * 0.8;

const menuItems = [
  { id: 'home', title: 'Home', letter: 'H', color: '#66a6ff' },
  { id: 'driver_home', title: 'Driver Home', letter: 'D', color: '#f5576c' },
  { id: 'rider_home', title: 'Rider Home', letter: 'R', color: '#EE436E' },
  { id: 'rating', title: 'Rating', letter: 'R', color: '#FFD700' },
  {
    id: 'completed_rides',
    title: 'Completed Rides',
    letter: 'C',
    color: '#00C853',
  },
  {
    id: 'transactions',
    title: 'Transactions',
    letter: 'T',
    color: '#EE436E',
  },
  {
    id: 'rider_my_rides',
    title: 'Rider My Rides',
    letter: 'R',
    color: '#EE436E',
  },
  {
    id: 'driver_my_rides',
    title: 'Driver My Rides',
    letter: 'M',
    color: '#EE436E',
  },
  {
    id: 'driver_profile',
    title: 'Driver Profile',
    letter: 'P',
    color: '#8B5CF6',
  },
  {
    id: 'rider_notifications',
    title: 'Rider Notifications',
    letter: 'N',
    color: '#F59E0B',
  },
  {
    id: 'rider_src_dest',
    title: 'Book a Ride',
    letter: 'B',
    color: '#3B82F6',
  },
  {
    id: 'driver_trip_request',
    title: 'Driver Trip Request',
    letter: 'T',
    color: '#FF6B35',
  },
];

const SideMenu = ({ isVisible, onClose, onMenuItemPress }) => {
  const slideAnim = useRef(new Animated.Value(-DRAWER_WIDTH)).current;
  const overlayOpacity = useRef(new Animated.Value(0)).current;
  const safeAreaInsets = useSafeAreaInsets();

  useEffect(() => {
    if (isVisible) {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(overlayOpacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: -DRAWER_WIDTH,
          duration: 250,
          useNativeDriver: true,
        }),
        Animated.timing(overlayOpacity, {
          toValue: 0,
          duration: 250,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [isVisible]);

  const handleMenuItemPress = item => {
    onMenuItemPress?.(item);
    onClose();
  };

  return (
    <Modal
      visible={isVisible}
      transparent
      animationType="none"
      onRequestClose={onClose}
      statusBarTranslucent
    >
      <View style={styles.container}>
        {/* Overlay */}
        <Animated.View style={[styles.overlay, { opacity: overlayOpacity }]}>
          <TouchableOpacity
            style={styles.overlayTouchable}
            activeOpacity={1}
            onPress={onClose}
          />
        </Animated.View>

        {/* Drawer */}
        <Animated.View
          style={[
            styles.drawer,
            {
              width: DRAWER_WIDTH,
              transform: [{ translateX: slideAnim }],
              paddingTop: safeAreaInsets.top,
            },
          ]}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            {/* Header */}
            <View style={styles.header}>
              <Text style={styles.headerTitle}>OK2GO</Text>
              <Text style={styles.headerSubtitle}>Navigation</Text>
            </View>

            {/* Menu Items */}
            <View style={styles.menuSection}>
              {menuItems.map((item, index) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.menuItem}
                  onPress={() => handleMenuItemPress(item)}
                  activeOpacity={0.7}
                >
                  <View style={styles.menuItemContent}>
                    <View
                      style={[
                        styles.menuIconContainer,
                        { backgroundColor: item.color },
                      ]}
                    >
                      <Text style={styles.menuIconLetter}>{item.letter}</Text>
                    </View>
                    <View style={styles.menuTextContainer}>
                      <Text style={styles.menuTitle}>{item.title}</Text>
                    </View>
                  </View>
                  <Text style={styles.chevron}>›</Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default SideMenu;
