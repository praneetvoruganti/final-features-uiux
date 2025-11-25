import { StyleSheet } from 'react-native';

// Premium OK2GO Design System - Matching FinalCarousel aesthetic
export const colors = {
  primary: '#EE436E', // OK2GO Primary
  secondary: '#FBDA25', // OK2GO Secondary
  black: '#201E1E', // OK2GO Black
  white: '#FEFEFE', // OK2GO White

  // Premium Neutral Palette
  background: '#FAFAFA', // Matching carousel background
  cardBackground: '#FFFFFF',
  textPrimary: '#201E1E', // Matching carousel text
  textSecondary: '#666666', // Matching carousel secondary text
  textTertiary: '#999999', // Matching carousel tertiary text
  placeholder: '#C7C7CC',

  // System & Accent Colors
  separator: 'rgba(0,0,0,0.08)',
  iconWrapper: 'rgba(0, 0, 0, 0.04)',
  shadow: '#000000',
  overlay: 'rgba(0, 0, 0, 0.5)', // Slightly lighter overlay
  success: '#34C759',
  danger: '#FF3B30',
};

export const fonts = {
  // System fonts with specific weights for a native, premium feel
  regular: { fontWeight: '400' },
  medium: { fontWeight: '500' },
  semibold: { fontWeight: '600' },
  bold: { fontWeight: '700' },
  heavy: { fontWeight: '800' },
};

// Premium Typography - Matching FinalCarousel style
export const typography = StyleSheet.create({
  title1: {
    fontSize: 24,
    ...fonts.bold,
    color: colors.textPrimary,
    letterSpacing: -0.3,
    lineHeight: 32,
  },
  title2: {
    fontSize: 20,
    ...fonts.bold,
    color: colors.textPrimary,
    letterSpacing: -0.3,
    lineHeight: 26,
  },
  headline: {
    fontSize: 15,
    ...fonts.semibold,
    color: colors.textPrimary,
    letterSpacing: 0,
    lineHeight: 22,
  },
  body: {
    fontSize: 14,
    ...fonts.regular,
    color: colors.textSecondary,
    letterSpacing: 0,
    lineHeight: 22,
    opacity: 0.8,
  },
  callout: {
    fontSize: 16,
    ...fonts.regular,
    color: colors.textSecondary,
    letterSpacing: 0,
    lineHeight: 24,
  },
  subhead: {
    fontSize: 14,
    ...fonts.regular,
    color: colors.textPrimary,
    letterSpacing: 0,
    lineHeight: 20,
  },
  footnote: {
    fontSize: 13,
    ...fonts.regular,
    color: colors.textTertiary,
    letterSpacing: 0,
    lineHeight: 18,
  },
  caption: {
    fontSize: 10,
    ...fonts.semibold,
    color: colors.textTertiary,
    letterSpacing: 1.2,
    lineHeight: 16,
    textTransform: 'uppercase',
  },
});

export const premiumStyles = StyleSheet.create({
  // Modal & Card Styling
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.overlay,
  },
  modalView: {
    width: '90%',
    maxWidth: 400,
    maxHeight: '85%',
    backgroundColor: colors.cardBackground,
    borderRadius: 20,
    padding: 32,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 24,
    elevation: 8,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.06)',
  },
  bottomSheet: {
    backgroundColor: colors.cardBackground,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    paddingTop: 12,
    maxHeight: '90%',
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 1,
    shadowRadius: 30,
    elevation: 20,
  },
  handle: {
    width: 40,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: colors.separator,
    alignSelf: 'center',
    marginBottom: 16,
  },

  // Header
  header: {
    alignItems: 'center',
    marginBottom: 32,
    position: 'relative',
  },
  headerIconWrapper: {
    width: 64,
    height: 64,
    borderRadius: 16,
    backgroundColor: colors.iconWrapper,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  closeButton: {
    position: 'absolute',
    top: -12,
    right: -12,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.iconWrapper,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Buttons
  buttonPrimary: {
    backgroundColor: colors.black,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  buttonPrimaryText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.white,
    letterSpacing: 0.5,
  },
  buttonSecondary: {
    backgroundColor: colors.iconWrapper,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.separator,
  },
  buttonSecondaryText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textPrimary,
    letterSpacing: 0.5,
  },
  buttonTertiary: {
    backgroundColor: 'transparent',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTertiaryText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary,
    letterSpacing: 0.5,
  },

  // List & Row Items
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.separator,
  },
  rowLabel: {
    ...typography.subhead,
    color: colors.textSecondary,
  },
  rowValue: {
    ...typography.subhead,
    color: colors.textPrimary,
    fontWeight: '500',
  },
});

// Premium Component Styles - Matching FinalCarousel aesthetic
export const componentStyles = StyleSheet.create({
  modalView: {
    padding: 32,
  },
  pulseIcon: {
    backgroundColor: 'rgba(238, 67, 110, 0.08)',
    width: 64,
    height: 64,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerContainer: {
    alignItems: 'center',
    marginVertical: 28,
    paddingVertical: 20,
    paddingHorizontal: 24,
    backgroundColor: colors.background,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.separator,
  },
  timerText: {
    fontSize: 48,
    fontWeight: '700',
    color: colors.primary,
    letterSpacing: -1,
    marginVertical: 8,
  },
  timerTrack: {
    width: '100%',
    height: 4,
    backgroundColor: colors.separator,
    borderRadius: 2,
    marginTop: 16,
  },
  timerBar: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 2,
  },
  tipBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.02)',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: colors.separator,
    marginTop: 4,
  },
  tipText: {
    flex: 1,
    fontSize: 13,
    color: colors.textSecondary,
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: 0,
  },
});
