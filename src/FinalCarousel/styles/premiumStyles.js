import { StyleSheet } from 'react-native';

// OK2GO Premium Design System - Full Compliance with ui_rules.md

// OK2GO Brand Colors (Official)
export const colors = {
  primary: '#EE436E', // OK2GO Pink
  secondary: '#FBDA25', // OK2GO Yellow
  black: '#201E1E', // OK2GO Black
  white: '#FEFEFE', // OK2GO White
  
  // Extended color palette following OK2GO standards
  background: '#FEFEFE', // OK2GO white background
  cardBackground: '#F8F9FA', // Light card background
  textPrimary: '#201E1E', // OK2GO black for primary text
  textSecondary: '#666666', // Secondary text
  textTertiary: '#999999', // Tertiary text
  placeholder: '#C7C7CC',
  
  // System colors
  separator: '#E1E1E1',
  iconWrapper: 'rgba(32, 30, 30, 0.05)', // OK2GO black with opacity
  shadow: 'rgba(0, 0, 0, 0.12)',
  overlay: 'rgba(0, 0, 0, 0.6)',
  success: '#34C759',
  danger: '#FF3B30',
};

// 8pt Spacing Grid System (OK2GO Standard)
export const spacing = {
  xs: 4, // 0.5 units
  sm: 8, // 1 unit
  md: 12, // 1.5 units
  lg: 16, // 2 units
  xl: 20, // 2.5 units
  xxl: 24, // 3 units
  xxxl: 32, // 4 units
};

export const fonts = {
  // OK2GO font weights
  regular: { fontWeight: '400' },
  medium: { fontWeight: '500' },
  semibold: { fontWeight: '600' },
  bold: { fontWeight: '700' },
  heavy: { fontWeight: '800' },
};

// OK2GO Typography System (ui_rules.md compliant)
export const typography = StyleSheet.create({
  title1: {
    fontSize: 28,
    ...fonts.heavy, // 800
    color: colors.textPrimary,
    letterSpacing: 0.6,
    lineHeight: 34,
  },
  title2: {
    fontSize: 24,
    ...fonts.bold, // 700
    color: colors.textPrimary,
    letterSpacing: 0.4,
    lineHeight: 30,
  },
  title3: {
    fontSize: 20,
    ...fonts.bold, // 700
    color: colors.textPrimary,
    letterSpacing: 0.2,
    lineHeight: 26,
  },
  headline: {
    fontSize: 18,
    ...fonts.semibold, // 600
    color: colors.textPrimary,
    letterSpacing: 0.1,
    lineHeight: 24,
  },
  body1: {
    fontSize: 16,
    ...fonts.regular, // 400
    color: colors.textSecondary,
    letterSpacing: -0.1,
    lineHeight: 24,
  },
  body2: {
    fontSize: 14,
    ...fonts.regular, // 400
    color: colors.textSecondary,
    letterSpacing: -0.2,
    lineHeight: 20,
  },
  button: {
    fontSize: 16,
    ...fonts.bold, // 700
    letterSpacing: 0.2,
  },
  caption: {
    fontSize: 12,
    ...fonts.medium, // 500
    color: colors.textTertiary,
    letterSpacing: 0.1,
    lineHeight: 16,
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
    borderRadius: 24,
    padding: 24,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 30,
    elevation: 20,
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
    marginBottom: 24,
    position: 'relative',
  },
  headerIconWrapper: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.iconWrapper,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
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
    backgroundColor: colors.primary,
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  buttonPrimaryText: {
    ...typography.headline,
    color: colors.white,
    fontWeight: '700',
  },
  buttonSecondary: {
    backgroundColor: colors.iconWrapper,
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSecondaryText: {
    ...typography.headline,
    color: colors.textPrimary,
  },
  buttonTertiary: {
    backgroundColor: 'transparent',
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTertiaryText: {
    ...typography.headline,
    color: colors.primary,
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

  // OK2GO Shadow System (Three-tier)
  shadowSmall: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  shadow: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 6,
  },
  shadowLarge: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.16,
    shadowRadius: 24,
    elevation: 12,
  },
});
