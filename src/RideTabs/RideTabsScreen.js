import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  FadeIn,
  Layout,
  Easing,
} from 'react-native-reanimated';
import { styles } from './styles';

const RideTabsScreen = ({ navigation, route }) => {
  const [activeTab, setActiveTab] = useState('scheduled'); // 'scheduled', 'completed', 'cancelled'
  const backButtonScale = useSharedValue(1);
  const backButtonOpacity = useSharedValue(1);

  // Mock ride data
  const ridesData = {
    scheduled: [],
    completed: [
      {
        id: 1,
        date: '30 Nov 2025',
        time: '09:45',
        vehicleType: 'SEDAN',
        vehicleNumber: 'TS11UD5765',
        address:
          '1-1-16/12, Sweta Enclave, Jawahar Nagar, Kavadiguda, Hyderabad, Telangana, India',
        fare: 1932,
      },
      {
        id: 2,
        date: '24 Nov 2025',
        time: '12:46',
        vehicleType: 'Mini',
        vehicleNumber: 'AP29AZ1234',
        address:
          'Lamakaan, Green Valley, Banjara Hills, Hyderabad, Telangana, India',
        fare: 268,
      },
      {
        id: 3,
        date: '04 Nov 2025',
        time: '12:38',
        vehicleType: 'Mini',
        vehicleNumber: 'AP29AZ1234',
        address:
          '12-7-2, New Mettuguda, Keshav Nagar Colony, Mettuguda, Hyderabad, Secunderabad, Telangana 500017, India',
        fare: 189,
      },
      {
        id: 4,
        date: '15 Oct 2025',
        time: '18:30',
        vehicleType: 'SUV',
        vehicleNumber: 'TS31TA2300',
        address:
          '1-1-16/12, Sweta Enclave, Jawahar Nagar, Kavadiguda, Hyderabad, Telangana 500020, India',
        fare: 1010,
      },
      {
        id: 5,
        date: '14 Oct 2025',
        time: '09:00',
        vehicleType: 'SUV',
        vehicleNumber: 'TG10LTR7063',
        address:
          'Security Room Cabin-2, WIPRO-1, Journalists Colony Phase 3, Phase 3, Gachibowli, Hyderabad, Telangana 500046, India',
        fare: 1039,
      },
    ],
    cancelled: [],
  };

  const backButtonStyle = useAnimatedStyle(() => ({
    transform: [{ scale: backButtonScale.value }],
    opacity: backButtonOpacity.value,
  }));

  const handleBackPress = () => {
    backButtonScale.value = withTiming(0.95, {
      duration: 100,
      easing: Easing.out(Easing.ease),
    });
    backButtonOpacity.value = withTiming(0.6, { duration: 100 });
    setTimeout(() => {
      backButtonScale.value = withSpring(1, { damping: 20, stiffness: 300 });
      backButtonOpacity.value = withTiming(1, { duration: 150 });
      navigation?.goBack();
    }, 100);
  };

  const handleTabPress = tab => {
    setActiveTab(tab);
  };

  const renderRideCard = (ride, index) => {
    return (
      <Animated.View
        key={ride.id}
        entering={FadeIn.delay(index * 50).duration(400)}
        layout={Layout.springify()}
        style={styles.rideCard}
      >
        {/* Date and Time Row */}
        <View style={styles.rideHeader}>
          <Text style={styles.rideDate}>{ride.date}</Text>
          <Text style={styles.rideTime}>{ride.time}</Text>
        </View>

        {/* Vehicle Info */}
        <Text style={styles.vehicleInfo}>
          {ride.vehicleType} - {ride.vehicleNumber}
        </Text>

        {/* Address and Fare Row */}
        <View style={styles.rideFooter}>
          <Text style={styles.rideAddress} numberOfLines={2}>
            {ride.address}
          </Text>
          <Text style={styles.rideFare}>₹{ride.fare}</Text>
        </View>
      </Animated.View>
    );
  };

  const getSectionTitle = () => {
    switch (activeTab) {
      case 'scheduled':
        return 'Upcoming Rides';
      case 'completed':
        return 'Ride History';
      case 'cancelled':
        return 'Cancelled Bookings';
      default:
        return 'My Rides';
    }
  };

  const getEmptyStateMessage = () => {
    switch (activeTab) {
      case 'scheduled':
        return {
          title: 'No rides in this category',
          subtitle: 'When you schedule a ride, it will appear here',
        };
      case 'completed':
        return {
          title: 'No rides in this category',
          subtitle:
            'Your completed rides will be listed here once you start riding',
        };
      case 'cancelled':
        return {
          title: 'No rides in this category',
          subtitle: 'Any rides you cancel will appear in this tab',
        };
      default:
        return {
          title: 'No rides in this category',
          subtitle: '',
        };
    }
  };

  const renderContent = () => {
    const rides = ridesData[activeTab];
    const emptyMessage = getEmptyStateMessage();

    if (rides.length === 0) {
      return (
        <>
          <Text style={styles.sectionTitle}>{getSectionTitle()}</Text>
          <Animated.View
            entering={FadeIn.duration(400)}
            style={styles.emptyState}
          >
            <Text style={styles.emptyStateText}>{emptyMessage.title}</Text>
            {emptyMessage.subtitle && (
              <Text style={styles.emptyStateSubtext}>
                {emptyMessage.subtitle}
              </Text>
            )}
          </Animated.View>
        </>
      );
    }

    return (
      <>
        <Text style={styles.sectionTitle}>{getSectionTitle()}</Text>
        <View style={styles.ridesContainer}>
          {rides.map((ride, index) => renderRideCard(ride, index))}
        </View>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FAFAFA" />

      {/* Header */}
      <View style={styles.header}>
        <Animated.View style={backButtonStyle}>
          <TouchableOpacity
            onPress={handleBackPress}
            style={styles.backButton}
            activeOpacity={1}
          >
            <Text style={styles.backIcon}>‹</Text>
          </TouchableOpacity>
        </Animated.View>
        <Text style={styles.headerTitle}>My Rides</Text>
        <View style={styles.headerSpacer} />
      </View>

      {/* Context Blurb */}
      <View style={styles.contextContainer}>
        <Text style={styles.contextText}>
          View your upcoming, completed and cancelled rides in one place
        </Text>
      </View>

      {/* Tab Bar */}
      <View style={styles.tabBarContainer}>
        <View style={styles.tabBar}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'scheduled' && styles.tabActive]}
            onPress={() => handleTabPress('scheduled')}
            activeOpacity={0.7}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'scheduled' && styles.tabTextActive,
              ]}
            >
              SCHEDULED
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tab, activeTab === 'completed' && styles.tabActive]}
            onPress={() => handleTabPress('completed')}
            activeOpacity={0.7}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'completed' && styles.tabTextActive,
              ]}
            >
              COMPLETED
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tab, activeTab === 'cancelled' && styles.tabActive]}
            onPress={() => handleTabPress('cancelled')}
            activeOpacity={0.7}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'cancelled' && styles.tabTextActive,
              ]}
            >
              CANCELLED
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Content */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {renderContent()}
      </ScrollView>
    </View>
  );
};

export default RideTabsScreen;
