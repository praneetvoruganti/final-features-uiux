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
  iconWrapper: 'rgba(32, 30, 30, 0.05)',
  success: '#34C759',
  warning: '#F59E0B',
  danger: '#FF3B30',
  creditGreen: '#34C759',
  debitOrange: '#F59E0B',
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  // Hero Header
  heroHeader: {
    backgroundColor: colors.primary,
    paddingBottom: isSmallDevice ? 24 : 32,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },

  // Header Top Section
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: Platform.select({
      ios: isSmallDevice ? 44 : 56,
      android: isSmallDevice ? 48 : 56,
      default: 56,
    }),
    paddingBottom: isSmallDevice ? 12 : 16,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    fontSize: 32,
    fontWeight: '200',
    color: colors.white,
    marginTop: -4,
    marginLeft: -2,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.white,
    letterSpacing: 0.2,
  },
  headerSpacer: {
    width: 40,
  },

  // Balance Hero Section
  balanceSection: {
    paddingHorizontal: 24,
    paddingTop: 8,
    paddingBottom: 8,
  },
  balanceLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 0.65)',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  balanceAmount: {
    fontSize: isSmallDevice ? 36 : 40,
    fontWeight: '700',
    color: colors.white,
    letterSpacing: -1,
    marginBottom: 4,
    lineHeight: isSmallDevice ? 44 : 48,
  },
  balanceSubtext: {
    fontSize: 12,
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 0.7)',
    letterSpacing: 0.1,
  },

  // Scroll View
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 60,
  },

  // Section Title
  sectionTitle: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.textTertiary,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    marginBottom: 16,
  },

  // Transaction Card
  transactionCard: {
    backgroundColor: colors.cardBackground,
    borderRadius: 16,
    padding: 20,
    marginBottom: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 2,
    borderWidth: 1,
    borderColor: colors.divider,
    position: 'relative',
  },

  // Transaction Header
  transactionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  transactionIconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  transactionTypeIndicator: {
    width: 4,
    height: 40,
    borderRadius: 2,
    marginRight: 16,
  },
  creditIndicator: {
    backgroundColor: colors.creditGreen,
  },
  debitIndicator: {
    backgroundColor: colors.debitOrange,
  },
  transactionMeta: {
    flex: 1,
  },
  transactionType: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.textPrimary,
    letterSpacing: -0.3,
    marginBottom: 6,
  },
  transactionDate: {
    fontSize: 11,
    fontWeight: '500',
    color: colors.textTertiary,
    letterSpacing: 0.2,
  },
  transactionAmount: {
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: -0.4,
  },
  creditAmount: {
    color: colors.creditGreen,
  },
  debitAmount: {
    color: colors.debitOrange,
  },

  // Transaction Body
  transactionBody: {
    marginTop: 4,
  },
  transactionDescription: {
    fontSize: 13,
    fontWeight: '400',
    color: colors.textSecondary,
    lineHeight: 20,
    letterSpacing: -0.1,
  },

  // Divider
  divider: {
    height: 1,
    backgroundColor: colors.divider,
    marginVertical: 16,
  },

  // Ride Details
  rideDetails: {
    backgroundColor: 'rgba(0,0,0,0.02)',
    borderRadius: 12,
    padding: 16,
  },
  rideDetailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  rideDetailLabel: {
    fontSize: 13,
    fontWeight: '500',
    color: colors.textSecondary,
    letterSpacing: 0,
  },
  rideDetailValue: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textPrimary,
    letterSpacing: -0.2,
  },
  discountedValue: {
    color: colors.creditGreen,
  },

  // Status Badge
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginTop: 12,
    alignSelf: 'flex-start',
  },
  statusCompleted: {
    backgroundColor: 'rgba(52, 199, 89, 0.1)',
  },
  statusApplied: {
    backgroundColor: 'rgba(245, 158, 11, 0.1)',
  },
  statusText: {
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: colors.textSecondary,
  },

  // Empty State
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 80,
    paddingHorizontal: 40,
  },
  emptyStateText: {
    fontSize: 17,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: 8,
    letterSpacing: -0.3,
    textAlign: 'center',
  },
  emptyStateSubtext: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.textSecondary,
    textAlign: 'center',
    letterSpacing: 0,
    lineHeight: 22,
  },

  // Info Card
  infoCard: {
    backgroundColor: colors.iconWrapper,
    borderRadius: 16,
    padding: 24,
    marginTop: 32,
    borderWidth: 1,
    borderColor: colors.divider,
  },
  infoTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.textPrimary,
    letterSpacing: -0.2,
    marginBottom: 12,
  },
  infoDescription: {
    fontSize: 13,
    fontWeight: '400',
    color: colors.textSecondary,
    lineHeight: 20,
    letterSpacing: 0,
    marginBottom: 20,
  },

  // Credit Type Sections
  creditTypeSection: {
    marginBottom: 16,
  },
  creditTypeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  creditTypeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.primary,
    marginRight: 10,
  },
  creditTypeDotSecondary: {
    backgroundColor: colors.secondary,
  },
  creditTypeTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textPrimary,
    letterSpacing: -0.2,
  },
  creditTypeDetail: {
    fontSize: 13,
    fontWeight: '400',
    color: colors.textSecondary,
    lineHeight: 20,
    letterSpacing: 0,
    marginLeft: 16,
  },

  // Info Footer
  infoFooter: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.textTertiary,
    lineHeight: 18,
    letterSpacing: 0,
    marginTop: 8,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: colors.divider,
  },
});
