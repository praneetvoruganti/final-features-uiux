# FinalCarousel - Smart Suggestions Carousel Component

A premium, standalone React Native carousel component with expandable Quick Guides and fun content. Designed with OK2GO brand standards and Apple/Google-level UI/UX.

## Features

**Premium Design**

- OK2GO brand colors and typography
- Sophisticated animations and micro-interactions
- Apple/Google-level visual polish

**Interactive Elements**

- Expandable Quick Guide cards with detailed step-by-step instructions
- Smooth category switching with fade animations
- Visual indicators for expandable content

**Performance Optimized**

- 60fps scrolling with snap-to behavior
- Memoized components preventing unnecessary re-renders
- Optimized FlatList configuration

**Responsive Design**

- Dynamic card sizing for tablets, large phones, and small phones
- Proper spacing and no overlapping
- Premium shadows and elevation patterns

## Installation

### Dependencies Required

```bash
npm install react-native-reanimated react-native-vector-icons
```

### iOS Setup (react-native-vector-icons)

```bash
cd ios && pod install
```

### Android Setup (react-native-vector-icons)

Add to `android/app/build.gradle`:

```gradle
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

## Usage

### Basic Implementation

```jsx
import React from 'react';
import {
  SmartSuggestionsCarousel,
  suggestionCategories,
} from './components/FinalCarousel';

const App = () => {
  return (
    <SmartSuggestionsCarousel
      title="Smart Suggestions"
      categories={suggestionCategories}
    />
  );
};

export default App;
```

### Custom Data

```jsx
import { SmartSuggestionsCarousel } from './components/FinalCarousel';

const customCategories = [
  {
    id: 'custom_category',
    title: 'Custom Category',
    cards: [
      {
        id: 'card-1',
        icon: 'star',
        title: 'Custom Card',
        description: 'Custom description text',
        highlight: 'Optional highlight badge',
        expandable: false, // Set to true for Quick Guide style cards
      },
    ],
  },
];

const App = () => (
  <SmartSuggestionsCarousel
    title="Custom Carousel"
    categories={customCategories}
  />
);
```

### Expandable Quick Guide Cards

For expandable cards (like Quick Guides), add the `expandable` property and `detailedGuide`:

```jsx
{
  id: 'guide-example',
  icon: 'calendar',
  title: 'How to Do Something',
  description: 'Brief description visible when collapsed',
  highlight: 'Optional badge',
  expandable: true,
  detailedGuide: {
    steps: [
      '1. First step instruction',
      '2. Second step instruction',
      // ... more steps
    ],
    tips: [
      '💡 Pro tip: Helpful advice',
      '📱 Another tip with emoji',
      // ... more tips
    ]
  }
}
```

## Props

### SmartSuggestionsCarousel

| Prop         | Type              | Required | Description               |
| ------------ | ----------------- | -------- | ------------------------- |
| `title`      | `string`          | Yes      | Main carousel title       |
| `categories` | `Array<Category>` | Yes      | Array of category objects |

### Category Object

| Property | Type          | Required | Description                |
| -------- | ------------- | -------- | -------------------------- |
| `id`     | `string`      | Yes      | Unique category identifier |
| `title`  | `string`      | Yes      | Category display name      |
| `cards`  | `Array<Card>` | Yes      | Array of card objects      |

### Card Object

| Property        | Type      | Required | Description                              |
| --------------- | --------- | -------- | ---------------------------------------- |
| `id`            | `string`  | Yes      | Unique card identifier                   |
| `icon`          | `string`  | No       | Feather icon name                        |
| `title`         | `string`  | Yes      | Card title                               |
| `description`   | `string`  | Yes      | Card description text                    |
| `highlight`     | `string`  | No       | Highlight badge text                     |
| `expandable`    | `boolean` | No       | Whether card can expand (default: false) |
| `detailedGuide` | `Object`  | No       | Detailed guide for expandable cards      |

### DetailedGuide Object (for expandable cards)

| Property | Type            | Required | Description               |
| -------- | --------------- | -------- | ------------------------- |
| `steps`  | `Array<string>` | Yes      | Step-by-step instructions |
| `tips`   | `Array<string>` | Yes      | Pro tips with emojis      |

## Customization

### Colors (styles/premiumStyles.js)

```jsx
export const colors = {
  primary: '#EE436E', // OK2GO Pink
  secondary: '#FBDA25', // OK2GO Yellow
  black: '#201E1E', // Dark Gray
  white: '#FEFEFE', // Off White
  // ... other colors
};
```

### Card Dimensions (styles/carouselStyles.js)

```jsx
const getCardWidth = () => {
  if (screenWidth >= 768) return 320; // Tablet
  if (screenWidth >= 414) return screenWidth * 0.72; // Large phones
  return screenWidth * 0.78; // Small phones
};
```

## Architecture

```
FinalCarousel/
├── index.js                    # Main export file
├── components/
│   ├── SmartSuggestionsCarousel.js  # Main carousel component
│   └── CarouselCard.js              # Individual card component
├── styles/
│   ├── premiumStyles.js             # Brand colors and shadows
│   └── carouselStyles.js            # Component-specific styles
├── data/
│   └── carouselData.js              # Default suggestion data
├── package.json                     # Dependencies
└── README.md                        # This file
```

## Performance Features

- **React.memo** with custom comparators prevent unnecessary re-renders
- **useCallback** and **useMemo** for optimized function and data memoization
- **FlatList optimizations** with proper `getItemLayout`, `maxToRenderPerBatch`, and windowing
- **Smooth 60fps animations** with react-native-reanimated
- **runOnJS** prevents UI thread blocking during state updates

## License

This component is designed for the OK2GO application. Please ensure you have proper licensing for react-native-vector-icons and react-native-reanimated in your project.

## Support

For issues related to this component, check:

1. Dependencies are properly installed
2. react-native-reanimated is configured correctly
3. Feather icons are available in your project
