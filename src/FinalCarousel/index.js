// FinalCarousel - Standalone Smart Suggestions Carousel Component
// Main export file for easy integration

export { default as SmartSuggestionsCarousel } from './components/SmartSuggestionsCarousel';
export { default as CarouselCard } from './components/CarouselCard';
export { suggestionCategories } from './data/carouselDataClean';
export { carouselStyles, CAROUSEL_SNAP_INTERVAL, CAROUSEL_CARD_WIDTH } from './styles/carouselStyles';
export { colors, typography, premiumStyles, spacing, fonts } from './styles/premiumStyles';

// Usage Example:
// import { SmartSuggestionsCarousel, suggestionCategories } from './components/FinalCarousel';
// 
// <SmartSuggestionsCarousel 
//   title="Smart Suggestions"
//   categories={suggestionCategories}
// />
