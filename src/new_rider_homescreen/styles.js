import { StyleSheet, Dimensions, Platform } from 'react-native';

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');
const isSmallDevice = SCREEN_HEIGHT < 700;
const isMediumDevice = SCREEN_HEIGHT >= 700 && SCREEN_HEIGHT < 800;
const isLargeDevice = SCREEN_HEIGHT >= 800;

// OK2GO Premium Design System - Ultra Refined
const colors = {
  primary: '#EE436E',
  primaryLight: 'rgba(238, 67, 110, 0.08)',
  primaryMedium: 'rgba(238, 67, 110, 0.15)',
  secondary: '#FBDA25',
  secondaryLight: 'rgba(251, 218, 37, 0.08)',
  black: '#201E1E',
  white: '#FFFFFF',
  background: '#FAFAFA',
  cardBackground: '#FFFFFF',
  cardBackgroundElevated: '#FEFEFE',
  textPrimary: '#201E1E',
  textSecondary: '#666666',
  textTertiary: '#999999',
  divider: 'rgba(0,0,0,0.08)',
  dividerLight: 'rgba(0,0,0,0.04)',
};

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  // Floating Header - Premium
  header: {
    position: 'absolute',
    top: Platform.select({
      ios: isSmallDevice ? 44 : 56,
      android: isSmallDevice ? 48 : 56,
      default: 56,
    }),
    left: 24,
    zIndex: 10,
  },
  menuButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
  menuIcon: {
    fontSize: 32,
    fontWeight: '200',
    color: colors.textPrimary,
    marginTop: -4,
    marginLeft: -2,
  },

  // Full Screen Scroll Container
  scrollContainer: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: Platform.select({
      ios: isSmallDevice ? 100 : isLargeDevice ? 120 : 110,
      android: isSmallDevice ? 100 : isLargeDevice ? 120 : 110,
      default: 110,
    }),
    paddingBottom: isSmallDevice ? 40 : 60,
  },

  // Greeting Section - Hero
  greetingSection: {
    marginBottom: isSmallDevice ? 28 : 36,
    paddingHorizontal: 24,
  },
  greetingLabel: {
    fontSize: isSmallDevice ? 14 : 15,
    fontWeight: '400',
    color: colors.textSecondary,
    letterSpacing: 0.1,
    marginBottom: isSmallDevice ? 6 : 8,
    lineHeight: 22,
  },
  userName: {
    fontSize: isSmallDevice ? 28 : isLargeDevice ? 36 : 32,
    fontWeight: '700',
    color: colors.textPrimary,
    letterSpacing: isSmallDevice ? -0.6 : -0.8,
    lineHeight: isSmallDevice ? 34 : isLargeDevice ? 44 : 40,
  },

  // Ride Types Grid - Refined spacing
  rideTypesGrid: {
    gap: isSmallDevice ? 10 : 12,
    paddingHorizontal: 24,
    marginBottom: isSmallDevice ? 24 : 28,
  },

  // Ride Row (for 2-column layout)
  rideRow: {
    flexDirection: 'row',
    gap: isSmallDevice ? 10 : 12,
  },

  // Featured Ride Card (Large) - Premium elevation
  rideCard: {
    backgroundColor: colors.white,
    borderRadius: isSmallDevice ? 14 : 16,
    padding: isSmallDevice ? 18 : 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 3,
    borderWidth: 0.5,
    borderColor: colors.dividerLight,
  },
  rideCardFeatured: {
    padding: isSmallDevice ? 20 : 24,
    backgroundColor: colors.cardBackgroundElevated,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 4,
  },

  // Small Ride Card (2-column) - Compact premium
  rideCardSmall: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: isSmallDevice ? 14 : 16,
    padding: isSmallDevice ? 16 : 18,
    minHeight: isSmallDevice ? 110 : 120,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 3,
    borderWidth: 0.5,
    borderColor: colors.dividerLight,
  },

  // Ride Card Header - Better proportions
  rideCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: isSmallDevice ? 10 : 12,
  },
  rideIndicator: {
    width: 4,
    height: isSmallDevice ? 28 : 32,
    borderRadius: 2,
    backgroundColor: colors.primary,
    marginRight: 12,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  rideIndicatorSecondary: {
    backgroundColor: colors.secondary,
    shadowColor: colors.secondary,
  },

  // Ride Card Typography - Refined hierarchy
  rideTitle: {
    fontSize: isSmallDevice ? 17 : 19,
    fontWeight: '700',
    color: colors.textPrimary,
    letterSpacing: -0.4,
    lineHeight: isSmallDevice ? 22 : 24,
  },
  rideTitleSmall: {
    fontSize: isSmallDevice ? 14 : 15,
    fontWeight: '700',
    color: colors.textPrimary,
    letterSpacing: -0.3,
    lineHeight: 20,
  },
  rideTagline: {
    fontSize: isSmallDevice ? 13 : 14,
    fontWeight: '600',
    color: colors.primary,
    letterSpacing: 0.1,
    marginBottom: isSmallDevice ? 6 : 8,
    textTransform: 'uppercase',
  },
  rideDescription: {
    fontSize: isSmallDevice ? 12 : 13,
    fontWeight: '400',
    color: colors.textSecondary,
    lineHeight: isSmallDevice ? 18 : 20,
    letterSpacing: 0,
  },
  rideDescriptionSmall: {
    fontSize: 11,
    fontWeight: '400',
    color: colors.textSecondary,
    lineHeight: 16,
    letterSpacing: 0,
  },
});
