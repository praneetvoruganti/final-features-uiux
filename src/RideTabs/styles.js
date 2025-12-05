import { StyleSheet, Dimensions, Platform } from 'react-native';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const isSmallDevice = SCREEN_HEIGHT < 700;

// OK2GO Premium Design System
const colors = {
  primary: '#EE436E',
  secondary: '#FBDA25',
  black: '#201E1E',
  white: '#FEFEFE',
  background: '#FAFAFA',
  cardBackground: '#FFFFFF',
  textPrimary: '#201E1E',
  textSecondary: '#666666',
  textTertiary: '#999999',
  divider: 'rgba(0,0,0,0.08)',
  shadow: 'rgba(0,0,0,0.04)',
  tabBarBg: 'rgba(238, 67, 110, 0.08)',
  tabActive: 'transparent',
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  // Header - Premium refined
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: Platform.select({
      ios: isSmallDevice ? 44 : 56,
      android: isSmallDevice ? 48 : 56,
      default: 56,
    }),
    paddingBottom: 24,
    backgroundColor: colors.background,
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.cardBackground,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
  backIcon: {
    fontSize: 32,
    fontWeight: '200',
    color: colors.textPrimary,
    marginTop: -4,
    marginLeft: -2,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.textPrimary,
    letterSpacing: -0.4,
  },
  headerSpacer: {
    width: 44,
  },

  // Context Blurb - More refined
  contextContainer: {
    paddingHorizontal: 32,
    paddingBottom: 28,
  },
  contextText: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.textSecondary,
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: 'center',
  },

  // Tab Bar Container - Ultra refined
  tabBarContainer: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: colors.tabBarBg,
    borderRadius: 30,
    padding: 4,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabActive: {
    backgroundColor: colors.cardBackground,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 3,
  },
  tabText: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.textTertiary,
    letterSpacing: 1.2,
  },
  tabTextActive: {
    color: colors.textPrimary,
    fontWeight: '700',
    letterSpacing: 1.3,
  },

  // Scroll View
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 4,
    paddingBottom: 60,
  },

  // Empty State - Refined minimal
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 120,
    paddingHorizontal: 40,
  },
  emptyStateText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textPrimary,
    letterSpacing: -0.2,
    textAlign: 'center',
    marginBottom: 12,
  },
  emptyStateSubtext: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.textSecondary,
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: 'center',
  },

  // Section Title - Better proportions
  sectionTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.textTertiary,
    letterSpacing: 1.8,
    textTransform: 'uppercase',
    marginBottom: 20,
  },

  // Rides Container
  ridesContainer: {
    width: '100%',
  },

  // Ride Card - Premium refined design
  rideCard: {
    backgroundColor: colors.cardBackground,
    borderRadius: 18,
    padding: 24,
    marginBottom: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 3,
    borderWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.04)',
  },

  // Ride Header - Date and Time with better visual separation
  rideHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 16,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },
  rideDate: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.textPrimary,
    letterSpacing: 0.3,
    textTransform: 'uppercase',
  },
  rideTime: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.primary,
    letterSpacing: -0.2,
  },

  // Vehicle Info - More prominent
  vehicleInfo: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.textPrimary,
    letterSpacing: -0.4,
    marginBottom: 20,
    lineHeight: 24,
  },

  // Ride Footer - Better structured
  rideFooter: {
    flexDirection: 'column',
    gap: 16,
  },
  rideAddress: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.textSecondary,
    lineHeight: 22,
    letterSpacing: -0.1,
  },
  rideFare: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.textPrimary,
    letterSpacing: -0.6,
    alignSelf: 'flex-end',
  },
});
