import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// OK2GO Premium Design System - Driver Edition
const BRAND_COLORS = {
  primary: '#EE436E', // Pink - Primary CTA
  secondary: '#FBDA25', // Yellow
  black: '#201E1E', // OK2GO Black
  white: '#FFFFFF', // Premium White
  background: '#FAFAFA', // Light Background
  textPrimary: '#201E1E',
  textSecondary: '#666666',
  textTertiary: '#999999',
  separator: 'rgba(0,0,0,0.08)',
  online: '#34C759',
  offline: '#8E8E93',
};

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BRAND_COLORS.background,
  },
  
  // Map - Clean and Uncluttered
  mapPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
  },
  mapText: {
    fontSize: 14,
    fontWeight: '500',
    color: BRAND_COLORS.textTertiary,
    letterSpacing: 0.5,
  },

  // Premium Header
  header: {
    position: 'absolute',
    top: 50,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerButton: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: BRAND_COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 6,
  },

  // Premium Bottom Sheet
  bottomSheet: {
    backgroundColor: BRAND_COLORS.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    height: height,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: -8 },
    shadowOpacity: 0.16,
    shadowRadius: 24,
    elevation: 12,
  },
  handle: {
    width: 36,
    height: 4,
    backgroundColor: BRAND_COLORS.separator,
    borderRadius: 2,
    alignSelf: 'center',
    marginTop: 12,
    marginBottom: 12,
  },
  sheetContent: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },

  // Premium Section Headers
  sectionHeader: {
    marginTop: 32,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: '700',
    color: BRAND_COLORS.textTertiary,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },

  // Premium Status Card - PRIMARY
  statusCard: {
    backgroundColor: BRAND_COLORS.white,
    borderRadius: 20,
    padding: 28,
    marginTop: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 4,
    borderWidth: 1,
    borderColor: BRAND_COLORS.separator,
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusInfo: {
    flex: 1,
  },
  statusTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 8,
  },
  dotOnline: {
    backgroundColor: BRAND_COLORS.online,
    shadowColor: BRAND_COLORS.online,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 4,
  },
  dotOffline: {
    backgroundColor: BRAND_COLORS.offline,
  },
  statusTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: BRAND_COLORS.textPrimary,
    letterSpacing: -0.3,
  },
  statusSubtitle: {
    fontSize: 14,
    fontWeight: '400',
    color: BRAND_COLORS.textSecondary,
    letterSpacing: 0,
    marginTop: 4,
    lineHeight: 20,
  },

  // Premium Stats Grid
  statsGrid: {
    flexDirection: 'row',
    gap: 16,
  },
  statCard: {
    flex: 1,
    backgroundColor: BRAND_COLORS.white,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 2,
    borderWidth: 1,
    borderColor: BRAND_COLORS.separator,
  },
  statLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: BRAND_COLORS.textTertiary,
    letterSpacing: 1.2,
    marginBottom: 12,
  },
  statValue: {
    fontSize: 28,
    fontWeight: '700',
    color: BRAND_COLORS.textPrimary,
    letterSpacing: -0.5,
  },

  // Premium Profile Card
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: BRAND_COLORS.white,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 2,
    borderWidth: 1,
    borderColor: BRAND_COLORS.separator,
  },
  profileAvatar: {
    width: 56,
    height: 56,
    borderRadius: 16,
    borderWidth: 0,
  },
  profileInfo: {
    flex: 1,
    marginLeft: 16,
  },
  profileName: {
    fontSize: 17,
    fontWeight: '600',
    color: BRAND_COLORS.textPrimary,
    letterSpacing: 0,
    marginBottom: 4,
  },
  profileDetails: {
    fontSize: 13,
    fontWeight: '400',
    color: BRAND_COLORS.textSecondary,
    letterSpacing: 0,
  },

  // Premium Wallet Card
  walletCard: {
    backgroundColor: BRAND_COLORS.white,
    borderRadius: 20,
    padding: 24,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 4,
    borderWidth: 1,
    borderColor: BRAND_COLORS.separator,
  },
  walletRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  walletLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: BRAND_COLORS.textTertiary,
    letterSpacing: 1.2,
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  walletValue: {
    fontSize: 32,
    fontWeight: '700',
    color: BRAND_COLORS.textPrimary,
    letterSpacing: -0.5,
  },
  rechargeButton: {
    backgroundColor: BRAND_COLORS.primary,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    shadowColor: BRAND_COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 6,
  },
  rechargeButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: BRAND_COLORS.white,
    letterSpacing: 0.5,
  },

  // Premium Scheduled Rides Button
  scheduledRidesButton: {
    backgroundColor: BRAND_COLORS.white,
    borderRadius: 20,
    padding: 24,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 4,
    borderWidth: 1,
    borderColor: BRAND_COLORS.separator,
  },
  scheduledRidesContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scheduledRidesInfo: {
    flex: 1,
  },
  scheduledRidesTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: BRAND_COLORS.textPrimary,
    letterSpacing: 0,
    marginBottom: 6,
  },
  scheduledRidesSubtitle: {
    fontSize: 14,
    fontWeight: '400',
    color: BRAND_COLORS.textSecondary,
    letterSpacing: 0,
    lineHeight: 20,
  },

  // Premium Offline Confirmation Modal
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  modalContainer: {
    width: '100%',
    maxWidth: 400,
  },
  modalContent: {
    backgroundColor: BRAND_COLORS.white,
    borderRadius: 20,
    padding: 28,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.16,
    shadowRadius: 24,
    elevation: 12,
  },
  modalHeader: {
    marginBottom: 12,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: BRAND_COLORS.textPrimary,
    letterSpacing: -0.3,
  },
  modalMessage: {
    fontSize: 15,
    fontWeight: '400',
    color: BRAND_COLORS.textSecondary,
    letterSpacing: 0,
    lineHeight: 22,
    marginBottom: 24,
  },
  modalButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  modalButtonCancel: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.05)',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  modalButtonCancelText: {
    fontSize: 15,
    fontWeight: '600',
    color: BRAND_COLORS.textPrimary,
    letterSpacing: 0,
  },
  modalButtonConfirm: {
    flex: 1,
    backgroundColor: BRAND_COLORS.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: BRAND_COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 6,
  },
  modalButtonConfirmText: {
    fontSize: 15,
    fontWeight: '600',
    color: BRAND_COLORS.white,
    letterSpacing: 0,
  },
});
