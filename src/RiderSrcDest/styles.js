import { StyleSheet, Platform, Dimensions } from 'react-native';

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
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  // Header
  header: {
    paddingHorizontal: 24,
    paddingTop: Platform.select({
      ios: isSmallDevice ? 44 : 56,
      android: isSmallDevice ? 48 : 56,
      default: 56,
    }),
    paddingBottom: 10,
    backgroundColor: colors.background,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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

  // Inputs Card
  inputsCard: {
    backgroundColor: colors.cardBackground,
    marginHorizontal: 24,
    marginBottom: 10,
    borderRadius: 18,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 3,
    borderWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.04)',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  dotContainer: {
    width: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pickupDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.black,
  },
  dropDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
  },
  input: {
    flex: 1,
    fontSize: 15,
    fontWeight: '500',
    color: colors.textPrimary,
    letterSpacing: -0.2,
    padding: 0,
    paddingVertical: 16,
  },
  divider: {
    height: 1,
    backgroundColor: colors.divider,
    marginVertical: 4,
  },

  // Marker Adjustment
  markerToggleContainer: {
    marginHorizontal: 24,
    marginBottom: 10,
  },
  toggleLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.textTertiary,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    marginBottom: 5,
  },
  toggleButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  toggleButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: colors.cardBackground,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: colors.divider,
  },
  toggleButtonActive: {
    backgroundColor: colors.cardBackground,
    borderColor: colors.black,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  toggleDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  toggleDotPickup: {
    backgroundColor: colors.black,
    opacity: 0.3,
  },
  toggleDotDrop: {
    backgroundColor: colors.primary,
    opacity: 0.3,
  },
  toggleDotActive: {
    opacity: 1,
  },
  toggleButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textSecondary,
    letterSpacing: -0.2,
  },
  toggleButtonTextActive: {
    color: colors.textPrimary,
    fontWeight: '700',
  },

  // Map Placeholder
  mapPlaceholder: {
    flex: 1,
    backgroundColor: colors.cardBackground,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 24,
    marginBottom: 10,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.divider,
  },
  mapText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.textTertiary,
    letterSpacing: 0.5,
  },

  // Button Container
  buttonContainer: {
    paddingHorizontal: 24,
    paddingBottom: Platform.select({
      ios: 34,
      android: 24,
      default: 24,
    }),
    backgroundColor: colors.background,
  },
  bookButton: {
    backgroundColor: colors.primary,
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 6,
  },
  bookButtonDisabled: {
    backgroundColor: colors.textTertiary,
    shadowOpacity: 0,
    elevation: 0,
  },
  bookButtonText: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.white,
    letterSpacing: -0.3,
  },
});
