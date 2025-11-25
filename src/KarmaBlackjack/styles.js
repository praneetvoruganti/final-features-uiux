import {
  colors,
  typography,
  spacing,
  premiumStyles,
} from '../FinalCarousel/styles/premiumStyles';
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  // Premium Modal Container
  modalContainer: {
    ...premiumStyles.modalContainer,
    justifyContent: 'flex-end',
    margin: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },

  // Sophisticated Full Screen Modal
  fullScreenModal: {
    width: '100%',
    height: '95%',
    backgroundColor: '#1A4D2E',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    overflow: 'hidden',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: -12 },
    shadowOpacity: 0.25,
    shadowRadius: 30,
    elevation: 24,
  },

  // Refined Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.xxl,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xl,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.15)',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },

  // Elegant Header Title
  headerTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 2.5,
    textTransform: 'uppercase',
    opacity: 0.9,
  },

  // Header Subtitle
  headerSubtitle: {
    fontSize: 10,
    fontWeight: '500',
    color: 'rgba(255,255,255,0.6)',
    letterSpacing: 0.5,
    marginTop: 4,
    fontStyle: 'italic',
  },

  // Refined Close Button
  closeButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.15)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  closeButtonText: {
    fontSize: 28,
    fontWeight: '300',
    color: '#FFFFFF',
    marginTop: -2,
    opacity: 0.8,
  },

  // Luxury Casino Table
  gameArea: {
    flex: 1,
    backgroundColor: '#1A4D2E',
  },

  // Game Content Container
  gameContent: {
    paddingHorizontal: spacing.xxl,
    paddingTop: spacing.xxl,
    paddingBottom: spacing.xl,
  },

  // Elegant Dealer Area
  dealerArea: {
    alignItems: 'center',
    marginBottom: spacing.xxl,
    paddingVertical: spacing.md,
  },

  // Refined Player Area
  playerArea: {
    alignItems: 'center',
    marginBottom: spacing.xl,
    paddingVertical: spacing.md,
  },

  // Premium Hand Container
  handContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 130,
    paddingVertical: spacing.md,
  },

  // Sophisticated Playing Card
  card: {
    width: 85,
    height: 120,
    backgroundColor: colors.white,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: -22,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 8,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.08)',
  },

  // Premium Card Typography
  cardValue: {
    fontSize: 36,
    fontWeight: '800',
    letterSpacing: -0.5,
  },

  cardSuit: {
    fontSize: 28,
    marginTop: 4,
  },

  // Elegant Hidden Card
  hiddenCard: {
    backgroundColor: colors.primary,
    borderWidth: 0,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
  },

  hiddenCardPattern: {
    width: '100%',
    height: '100%',
    opacity: 0.15,
    backgroundColor: colors.secondary,
    borderRadius: 12,
  },

  // Refined Score Label
  scoreLabel: {
    fontSize: 11,
    fontWeight: '700',
    marginVertical: spacing.md,
    color: 'rgba(255,255,255,0.7)',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },

  // Premium Controls Container
  controls: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: spacing.xl,
    paddingBottom: spacing.xxl,
    paddingHorizontal: spacing.lg,
  },

  // Sophisticated Action Button Base
  actionButton: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 32,
    minWidth: width * 0.38,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 6,
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.3)',
  },

  // Premium Hit Button
  hitButton: {
    backgroundColor: 'rgba(238, 67, 110, 0.2)',
    borderColor: colors.primary,
    borderWidth: 2,
  },

  // Elegant Stand Button
  standButton: {
    backgroundColor: 'rgba(251, 218, 37, 0.15)',
    borderColor: colors.secondary,
    borderWidth: 2,
  },

  // Refined Button Text
  buttonText: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.primary,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },

  standButtonText: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.secondary,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },

  // Premium Reward Modal
  rewardOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.92)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },

  // Sophisticated Reward Card
  rewardCard: {
    width: width * 0.88,
    maxWidth: 400,
    backgroundColor: '#1A4D2E',
    borderRadius: 20,
    padding: spacing.xxxl,
    paddingTop: 40,
    paddingBottom: 40,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.4,
    shadowRadius: 40,
    elevation: 24,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.2)',
  },

  // Premium Reward Title
  rewardTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: spacing.md,
    letterSpacing: 0.5,
    lineHeight: 28,
  },

  // Refined Reward Description
  rewardDescription: {
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: spacing.xl,
    color: 'rgba(255,255,255,0.7)',
    letterSpacing: 0.2,
    lineHeight: 22,
  },

  // Sophisticated Collect Button
  collectButton: {
    backgroundColor: 'rgba(251, 218, 37, 0.15)',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 48,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.secondary,
  },

  collectButtonText: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.secondary,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },

  // Premium Karma Badge Redesign
  karmaBadge: {
    position: 'absolute',
    top: 100,
    right: spacing.xxl,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
    zIndex: 10,
  },

  karmaLabel: {
    fontSize: 9,
    fontWeight: '700',
    color: 'rgba(255,255,255,0.6)',
    letterSpacing: 1.5,
    marginBottom: 4,
  },

  karmaValue: {
    fontSize: 22,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: -0.5,
  },

  // Elegant Status Message
  statusText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
    marginVertical: spacing.lg,
    letterSpacing: 1.5,
    lineHeight: 20,
    textTransform: 'uppercase',
    opacity: 0.9,
  },

  // Sophisticated Reward Modal Styles
  rewardBadge: {
    backgroundColor: 'rgba(251, 218, 37, 0.2)',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: spacing.xl,
    borderWidth: 1.5,
    borderColor: colors.secondary,
  },

  lossBadge: {
    backgroundColor: 'rgba(238, 67, 110, 0.2)',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: spacing.xl,
    borderWidth: 1.5,
    borderColor: colors.primary,
  },

  rewardBadgeText: {
    fontSize: 11,
    fontWeight: '800',
    color: colors.secondary,
    letterSpacing: 2,
  },

  lossBadgeText: {
    fontSize: 11,
    fontWeight: '800',
    color: colors.primary,
    letterSpacing: 2,
  },

  karmaEarned: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    paddingHorizontal: spacing.xxl,
    paddingVertical: spacing.lg,
    borderRadius: 12,
    marginBottom: spacing.xl,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
    alignItems: 'center',
    width: '100%',
  },

  karmaEarnedLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: 'rgba(255,255,255,0.6)',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    marginBottom: 8,
  },

  karmaEarnedValue: {
    fontSize: 32,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: -0.5,
  },

  disclaimerText: {
    fontSize: 11,
    fontWeight: '500',
    color: 'rgba(255,255,255,0.5)',
    textAlign: 'center',
    marginTop: spacing.md,
    letterSpacing: 0.3,
    fontStyle: 'italic',
  },
});
