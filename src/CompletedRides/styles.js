import { StyleSheet, Platform } from 'react-native';

// OK2GO Design System
const colors = {
  primary: '#EE436E',
  secondary: '#FBDA25',
  black: '#201E1E',
  white: '#FEFEFE',
  textPrimary: '#201E1E',
  textSecondary: '#666666',
  textTertiary: '#999999',
  separator: '#F0F0F0',
  background: '#F8F9FA',
  cardBackground: '#FFFFFF',
  success: '#10B981',
  danger: '#EF4444',
  overlay: 'rgba(32, 30, 30, 0.02)',
};

const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
  xxxxl: 40,
};

const typography = {
  headerTitle: {
    fontSize: 19,
    fontWeight: '700',
    letterSpacing: 0.3,
    color: colors.textPrimary,
  },
  infoLabel: {
    fontSize: 13,
    fontWeight: '500',
    letterSpacing: -0.1,
    color: colors.textSecondary,
    textTransform: 'uppercase',
  },
  infoValue: {
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: -0.05,
    color: colors.textPrimary,
  },
  routeLabel: {
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: -0.1,
    color: colors.textPrimary,
  },
  addressText: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: -0.15,
    color: colors.textPrimary,
  },
  stopTitle: {
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 0.5,
    color: colors.primary,
    textTransform: 'uppercase',
  },
  fareLabel: {
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: -0.1,
    color: colors.textSecondary,
  },
  fareValue: {
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0,
    color: colors.textPrimary,
  },
  helpButtonText: {
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: -0.1,
    color: colors.textPrimary,
  },
};

const shadows = {
  small: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 3,
    elevation: 1,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 3,
  },
  large: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.14,
    shadowRadius: 20,
    elevation: 6,
  },
  premium: {
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 4,
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  // Header Styles
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.lg,
    paddingTop: spacing.xl,
    backgroundColor: colors.white,
    borderBottomWidth: 0,
    ...shadows.small,
  },
  backButton: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: colors.overlay,
  },
  backIcon: {
    fontSize: 32,
    fontWeight: '200',
    color: colors.textPrimary,
    marginTop: -4,
    marginLeft: -2,
  },
  headerTitle: {
    ...typography.headerTitle,
    flex: 1,
    textAlign: 'center',
    marginHorizontal: spacing.lg,
  },

  // Toggle Styles
  toggleContainer: {
    width: 96,
    height: 40,
  },
  toggleTrack: {
    width: 96,
    height: 40,
    backgroundColor: colors.overlay,
    borderRadius: 20,
    padding: spacing.xs,
    position: 'relative',
    borderWidth: 1,
    borderColor: colors.separator,
  },
  toggleThumb: {
    width: 40,
    height: 32,
    backgroundColor: colors.primary,
    borderRadius: 16,
    position: 'absolute',
    top: spacing.xs,
    left: spacing.xs,
    ...shadows.medium,
  },
  toggleIconContainer: {
    position: 'absolute',
    width: 40,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    top: spacing.xs,
    left: spacing.xs,
  },
  toggleIcon: {
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 0,
  },

  // Scroll View Styles
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: spacing.xl,
    paddingBottom: spacing.xxxl,
  },

  // Info Card Styles
  infoCard: {
    backgroundColor: colors.cardBackground,
    borderRadius: 16,
    padding: spacing.xl,
    marginBottom: spacing.xxl,
    ...shadows.medium,
    borderWidth: 1,
    borderColor: colors.separator,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.lg,
  },
  infoLabel: {
    ...typography.infoLabel,
  },
  infoValue: {
    ...typography.infoValue,
  },
  separator: {
    height: 1,
    backgroundColor: colors.separator,
    marginHorizontal: -spacing.xs,
  },

  // Route Card Styles
  routeCard: {
    backgroundColor: colors.cardBackground,
    borderRadius: 16,
    padding: spacing.xl,
    marginBottom: spacing.xl,
    ...shadows.medium,
    borderWidth: 1,
    borderColor: colors.separator,
  },
  routeSection: {
    marginBottom: spacing.xxl,
  },
  routeHeader: {
    marginBottom: spacing.md,
    paddingBottom: spacing.sm,
    borderBottomWidth: 2,
    borderBottomColor: `${colors.primary}15`,
  },
  routeLabel: {
    ...typography.routeLabel,
    textTransform: 'uppercase',
    fontSize: 12,
    letterSpacing: 1,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingLeft: spacing.sm,
  },
  locationDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.primary,
    marginTop: 6,
    marginRight: spacing.lg,
    borderWidth: 2,
    borderColor: `${colors.primary}40`,
  },
  locationDotDestination: {
    backgroundColor: colors.success,
    borderColor: `${colors.success}40`,
  },
  addressText: {
    ...typography.addressText,
    flex: 1,
  },

  // Arrow Indicator Styles
  arrowContainer: {
    alignItems: 'center',
    marginVertical: spacing.lg,
  },
  dashedLine: {
    width: 2,
    height: 16,
    backgroundColor: colors.separator,
  },
  arrowCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: `${colors.primary}10`,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: spacing.sm,
    borderWidth: 2,
    borderColor: `${colors.primary}20`,
  },
  arrowText: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.primary,
  },

  // Multiple Stops Styles
  stopContainer: {
    marginBottom: spacing.xxl,
  },
  stopHeader: {
    marginBottom: spacing.lg,
    paddingVertical: spacing.sm,
    backgroundColor: `${colors.primary}08`,
    borderRadius: 8,
  },
  stopTitle: {
    ...typography.stopTitle,
    textAlign: 'center',
  },
  stopAddressContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingLeft: spacing.xl,
    paddingRight: spacing.sm,
  },
  stopAddressText: {
    ...typography.addressText,
    flex: 1,
  },
  stopArrowContainer: {
    alignItems: 'center',
    paddingVertical: spacing.md,
  },
  stopSeparator: {
    height: 2,
    backgroundColor: `${colors.primary}10`,
    marginTop: spacing.xl,
    marginBottom: spacing.sm,
    marginHorizontal: spacing.lg,
  },

  // Fare Section Styles
  fareSeparator: {
    height: 2,
    backgroundColor: `${colors.primary}15`,
    marginVertical: spacing.xl,
  },
  fareSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: `${colors.primary}05`,
    padding: spacing.lg,
    borderRadius: 12,
    marginTop: -spacing.sm,
  },
  fareLabel: {
    ...typography.fareLabel,
    textTransform: 'uppercase',
    fontSize: 12,
    letterSpacing: 1,
  },
  fareValue: {
    ...typography.fareValue,
    fontSize: 20,
    color: colors.primary,
  },

  // Help Button Styles
  helpButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.cardBackground,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: colors.separator,
    paddingVertical: spacing.xl,
    paddingHorizontal: spacing.xxl,
    marginTop: spacing.sm,
    ...shadows.small,
  },
  helpButtonText: {
    ...typography.helpButtonText,
  },
});

export default styles;
