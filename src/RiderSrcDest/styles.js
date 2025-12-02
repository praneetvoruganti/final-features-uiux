import { StyleSheet } from 'react-native';

// Ultra-premium minimal color scheme
const colors = {
  background: '#FAFAFA',
  cardBackground: '#FFFFFF',
  primary: '#EE436E',
  textPrimary: '#1A1A1A',
  textSecondary: '#6B6B6B',
  textTertiary: '#ADADAD',
  divider: 'rgba(0,0,0,0.08)',
  shadow: 'rgba(0,0,0,0.08)',
  pickup: '#201E1E',
  destination: '#EE436E',
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  // Refined Header - Floating over map
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 20,
    zIndex: 10,
    backgroundColor: 'transparent',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.cardBackground,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 6,
  },
  backIcon: {
    fontSize: 32,
    fontWeight: '200',
    color: colors.textPrimary,
    marginTop: -4,
    marginLeft: -2,
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: colors.textPrimary,
    letterSpacing: -0.2,
    backgroundColor: colors.cardBackground,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  headerSpacer: {
    width: 40,
  },

  // Map Placeholder - Full screen
  mapPlaceholder: {
    flex: 1,
    backgroundColor: colors.cardBackground,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.divider,
  },
  mapText: {
    fontSize: 13,
    fontWeight: '500',
    color: colors.textTertiary,
    letterSpacing: 0.5,
  },

  // Location Container - Floating bottom sheet
  locationContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.background,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 40,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.12,
    shadowRadius: 24,
    elevation: 12,
  },

  // Location Card - Main input container
  locationCard: {
    backgroundColor: colors.cardBackground,
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 16,
    elevation: 4,
  },

  // Location Input Wrapper
  locationInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  // Location Dot Wrapper
  locationDotWrapper: {
    width: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Pickup Dot
  pickupDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.pickup,
  },

  // Drop Dot
  dropDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.destination,
  },

  // Location Input
  locationInput: {
    flex: 1,
    fontSize: 16,
    fontWeight: '400',
    color: colors.textPrimary,
    letterSpacing: -0.3,
    padding: 0,
    paddingVertical: 12,
  },

  // Connection Line Wrapper
  connectionLineWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },

  // Connection Line
  connectionLine: {
    width: 2,
    height: 24,
    backgroundColor: colors.divider,
    marginLeft: 15,
  },

  // Swap Button
  swapButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
    borderWidth: 1,
    borderColor: colors.divider,
  },
  swapIcon: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textSecondary,
  },

  // Search Button
  searchButton: {
    backgroundColor: colors.primary,
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8,
  },
  searchButtonDisabled: {
    backgroundColor: colors.divider,
    shadowOpacity: 0,
    elevation: 0,
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.cardBackground,
    letterSpacing: -0.3,
  },
});
