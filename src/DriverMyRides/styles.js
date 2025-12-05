import { StyleSheet } from 'react-native';

// color scheme
const colors = {
  background: '#FAFAFA',
  cardBackground: '#FFFFFF',
  textPrimary: '#1A1A1A',
  textSecondary: '#6B6B6B',
  textTertiary: '#ADADAD',
  divider: 'rgba(0,0,0,0.06)',
  shadow: 'rgba(0,0,0,0.04)',
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  // Header
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
    paddingBottom: 60,
  },

  // Page Title
  pageTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.textPrimary,
    letterSpacing: -1,
    marginBottom: 40,
    lineHeight: 38,
  },

  // Section Container
  section: {
    marginBottom: 32,
  },

  // Section Label
  sectionLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.textTertiary,
    letterSpacing: 1.5,
    marginBottom: 12,
    textTransform: 'uppercase',
  },

  //  Card
  card: {
    backgroundColor: colors.cardBackground,
    borderRadius: 16,
    padding: 24,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 2,
  },

  // Info Row
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 24,
  },

  //  Typography
  infoLabel: {
    fontSize: 15,
    fontWeight: '400',
    color: colors.textSecondary,
    letterSpacing: -0.1,
  },
  infoValue: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.textPrimary,
    letterSpacing: -0.3,
  },

  //  Divider
  divider: {
    height: 1,
    backgroundColor: colors.divider,
    marginVertical: 20,
  },

  // Location Typography
  locationLabel: {
    fontSize: 13,
    fontWeight: '500',
    color: colors.textSecondary,
    marginBottom: 16,
    letterSpacing: -0.1,
  },
  locationText: {
    fontSize: 15,
    fontWeight: '400',
    color: colors.textPrimary,
    lineHeight: 24,
    letterSpacing: -0.2,
  },
});
