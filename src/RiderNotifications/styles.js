import { StyleSheet } from 'react-native';

// Ultra-premium minimal color scheme
const colors = {
  background: '#FAFAFA',
  cardBackground: '#FFFFFF',
  textPrimary: '#1A1A1A',
  textSecondary: '#6B6B6B',
  textTertiary: '#ADADAD',
  shadow: 'rgba(0,0,0,0.04)',
  success: '#10B981',
  payment: '#F59E0B',
  trip: '#3B82F6',
  booking: '#8B5CF6',
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  // Refined Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 24,
    backgroundColor: colors.background,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.cardBackground,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
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
  },
  headerSpacer: {
    width: 40,
  },

  // Scroll View
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 8,
    paddingBottom: 40,
  },

  // Page Title
  pageTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.textTertiary,
    letterSpacing: 1.5,
    marginBottom: 20,
    textTransform: 'uppercase',
  },

  // Notification Card
  notificationCard: {
    backgroundColor: colors.cardBackground,
    borderRadius: 16,
    padding: 20,
    paddingTop: 16,
    paddingBottom: 18,
    marginBottom: 12,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 2,
    borderLeftWidth: 3,
    borderLeftColor: 'transparent',
  },

  // Notification Header
  notificationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  // Notification Dot
  notificationDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.textTertiary,
    marginRight: 10,
  },
  dotSuccess: {
    backgroundColor: colors.success,
  },
  dotPayment: {
    backgroundColor: colors.payment,
  },
  dotTrip: {
    backgroundColor: colors.trip,
  },
  dotBooking: {
    backgroundColor: colors.booking,
  },

  // Notification Timestamp
  notificationTimestamp: {
    fontSize: 11,
    fontWeight: '500',
    color: colors.textTertiary,
    letterSpacing: 0,
  },

  // Notification Message
  notificationMessage: {
    fontSize: 15,
    fontWeight: '400',
    color: colors.textPrimary,
    lineHeight: 22,
    letterSpacing: -0.2,
  },

  // End Spacer
  endSpacer: {
    height: 20,
  },
});
