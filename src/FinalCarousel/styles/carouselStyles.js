import { StyleSheet, Dimensions } from 'react-native';
import { colors, typography, premiumStyles } from './premiumStyles';

const { width: screenWidth } = Dimensions.get('window');
const HORIZONTAL_PADDING = 24;

// Premium card sizing with elegant proportions
const getCardWidth = () => {
  if (screenWidth >= 768) return 340;
  if (screenWidth >= 414) return screenWidth * 0.8;
  return screenWidth * 0.85;
};

const CARD_WIDTH = getCardWidth();
const CARD_SPACING = 16;
const SNAP_INTERVAL = CARD_WIDTH + CARD_SPACING;

export const carouselStyles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginBottom: 32,
  },

  // Premium Title
  title: {
    fontSize: 13,
    fontWeight: '700',
    paddingHorizontal: HORIZONTAL_PADDING,
    marginBottom: 24,
    color: colors.textTertiary,
    letterSpacing: 2.5,
    lineHeight: 16,
    textAlign: 'left',
    textTransform: 'uppercase',
  },

  // Premium Pills Container
  pillsContainer: {
    paddingHorizontal: HORIZONTAL_PADDING,
    paddingBottom: 24,
    gap: 12,
  },

  // Sophisticated Pill Design - Inactive State
  pillButton: {
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginRight: 10,
    borderWidth: 1,
    borderColor: colors.separator,
  },

  // Premium Pill - Active State
  pillButtonActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },

  // Pill Text - Elegant Typography
  pillText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.textSecondary,
    letterSpacing: 0.5,
  },

  // Pill Text - Active State
  pillTextActive: {
    color: colors.white,
    fontWeight: '600',
    letterSpacing: 0.8,
  },

  // Carousel Content Container
  carouselContentContainer: {
    paddingLeft: HORIZONTAL_PADDING,
    paddingRight: HORIZONTAL_PADDING + CARD_SPACING,
    paddingVertical: 12,
    paddingBottom: 24,
  },

  // Premium Card Container
  itemContainer: {
    width: CARD_WIDTH,
    minHeight: 280,
    backgroundColor: colors.white,
    borderRadius: 20,
    marginRight: CARD_SPACING,
    padding: 28,
    paddingTop: 32,
    paddingBottom: 32,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 4,
    justifyContent: 'flex-start',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.06)',
    overflow: 'hidden',
  },

  // Premium Category Badge
  categoryBadge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(0,0,0,0.04)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    marginBottom: 20,
  },

  categoryText: {
    fontSize: 10,
    fontWeight: '600',
    color: colors.textTertiary,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },

  // Elegant Card Title
  itemTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.textPrimary,
    textAlign: 'left',
    marginBottom: 12,
    letterSpacing: -0.3,
    lineHeight: 26,
  },

  // Refined Card Description
  itemDescription: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.textSecondary,
    textAlign: 'left',
    letterSpacing: 0,
    lineHeight: 22,
    marginBottom: 20,
    opacity: 0.8,
  },

  // Elegant Highlight Badge
  highlightBadge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(0,0,0,0.05)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    marginTop: 'auto',
  },
  highlightText: {
    fontSize: 10,
    color: colors.textPrimary,
    fontWeight: '600',
    letterSpacing: 0.5,
  },

  // Premium Icon Container
  cardIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: 20,
  },

  cardIcon: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.white,
    letterSpacing: 0.5,
  },

  // Premium Empty State
  emptyContainer: {
    width: CARD_WIDTH,
    minHeight: 280,
    paddingHorizontal: 28,
    paddingVertical: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.06)',
    marginRight: CARD_SPACING,
  },

  emptyText: {
    fontSize: 13,
    fontWeight: '500',
    color: colors.textTertiary,
    textAlign: 'center',
    lineHeight: 20,
    letterSpacing: 0,
  },

  // Card Bottom Section
  cardBottomSection: {
    marginTop: 'auto',
    alignItems: 'flex-start',
  },

  // Subtle interaction hint
  tapHint: {
    fontSize: 10,
    fontWeight: '500',
    color: colors.textTertiary,
    textAlign: 'left',
    marginTop: 4,
    opacity: 0.5,
  },

  // Premium Expanded Container
  expandedContainer: {
    width: CARD_WIDTH,
    minHeight: 480,
    backgroundColor: colors.white,
    borderRadius: 20,
    marginRight: CARD_SPACING,
    padding: 28,
    paddingTop: 32,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 24,
    elevation: 8,
    justifyContent: 'flex-start',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    overflow: 'hidden',
  },

  // Elegant guide content container
  detailedGuideContainer: {
    marginTop: 24,
    paddingTop: 24,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.08)',
  },

  // Premium steps styling
  guideStepsContainer: {
    marginBottom: 24,
  },

  guideStepsTitle: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.textTertiary,
    marginBottom: 16,
    textAlign: 'left',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },

  guideStep: {
    fontSize: 13,
    fontWeight: '400',
    color: colors.textSecondary,
    lineHeight: 20,
    marginBottom: 12,
    paddingLeft: 0,
  },

  // Refined tips styling
  guideTipsContainer: {
    backgroundColor: 'rgba(0,0,0,0.02)',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.06)',
  },

  guideTipsTitle: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.textTertiary,
    marginBottom: 12,
    textAlign: 'left',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },

  guideTip: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.textSecondary,
    lineHeight: 18,
    marginBottom: 8,
  },

  // Sophisticated collapse button
  collapseButton: {
    backgroundColor: colors.black,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignSelf: 'flex-start',
    marginTop: 20,
  },

  collapseButtonText: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.white,
    textAlign: 'center',
    letterSpacing: 0.5,
  },

  // Minimal Expand Indicator
  expandIndicator: {
    position: 'absolute',
    top: 28,
    right: 28,
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 8,
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },

  expandIcon: {
    color: colors.textPrimary,
    opacity: 0.4,
  },

  // Refined tap hint for expandable cards
  expandableTapHint: {
    fontSize: 10,
    fontWeight: '500',
    color: colors.textTertiary,
    textAlign: 'left',
    marginTop: 4,
    letterSpacing: 0,
    opacity: 0.5,
  },

  // Subtle expandable card accent
  expandableCardAccent: {
    borderLeftWidth: 0,
  },
});

// Export for use in component
export const CAROUSEL_SNAP_INTERVAL = SNAP_INTERVAL;
export const CAROUSEL_CARD_WIDTH = CARD_WIDTH;
