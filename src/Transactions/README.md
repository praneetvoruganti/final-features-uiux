# Transactions Screen

## Overview

The Transactions screen provides riders with a comprehensive view of their credit balance and transaction history. It manages promotional credits, discount applications, and provides transparency on how credits are used during rides.

## Features

### Current Implementation

- **Available Balance Display**: Hero section showing current credit balance
- **Transaction History**: Chronological list of credits and debits
- **Credit Received**: Shows promotional credits added to account
- **Discount Applied**: Details of discounts used on rides (20% off, max ₹50)
- **Ride Details Integration**: Links transactions to specific ride IDs
- **Info Section**: Explains how credits work

### Credit System Logic

- Riders receive promotional credits (e.g., ₹200)
- Credits are automatically applied to eligible rides
- 20% discount per ride, up to a maximum of ₹50
- Credits expire 90 days from issue date

## Design System Compliance

### Colors (OK2GO Brand)

- Primary: `#EE436E` (OK2GO Pink) - Used for hero header
- Secondary: `#FBDA25` (OK2GO Yellow) - Accent elements
- Success/Credit: `#10B981` - Credit transactions
- Warning/Debit: `#F59E0B` - Debit/discount transactions

### Typography

- **Balance Amount**: 48px, weight 800 (ultra-bold)
- **Transaction Type**: 16px, weight 600 (semibold)
- **Section Titles**: 13px, weight 700, uppercase, letter-spacing 1.5
- Consistent with FinalCarousel and CompletedRides

### Spacing & Layout

- 8pt grid system
- Card padding: 24px
- Border radius: 20px (cards), 32px (hero bottom)
- Premium shadows matching design system

### Animations

- Back button: Scale + opacity on press (Reanimated)
- Transaction cards: Staggered FadeIn entrance (50ms delay per card)
- Hero section: FadeIn entrance (400ms)

## Component Structure

```
Transactions/
├── TransactionsScreen.js    # Main screen component
├── styles.js                 # Premium styling system
├── index.js                  # Export file
└── README.md                 # This file
```

## Transaction Data Model

### Credit Transaction

```javascript
{
  id: number,
  type: 'credit',
  amount: number,
  date: 'YYYY-MM-DD HH:MM:SS',
  description: string,
  status: 'completed'
}
```

### Debit/Discount Transaction

```javascript
{
  id: number,
  type: 'debit',
  amount: number,
  date: 'YYYY-MM-DD HH:MM:SS',
  description: string,
  rideId: string,
  originalFare: number,
  discountedFare: number,
  status: 'applied'
}
```

## Navigation Integration

### App Drawer

- Accessible from `SideMenu` component
- Menu item: "Transactions" with 'T' icon
- Color: OK2GO Primary (`#EE436E`)

### Screen Flow

```
Home → SideMenu → Transactions
Transactions → Back → Home
```

## Future Enhancements

### Phase 2 (Cosmetic/UX)

- [ ] Pull-to-refresh for transaction list
- [ ] Transaction filtering (Credits/Debits/All)
- [ ] Date range selector
- [ ] Search functionality
- [ ] Export transaction history (PDF/CSV)
- [ ] Share receipt functionality

### Phase 3 (Advanced Features)

- [ ] Push notifications for credits received
- [ ] Expiry countdown badges
- [ ] Credit gifting to other riders
- [ ] Referral credit integration
- [ ] Subscription/membership tiers

### Phase 4 (Gamification)

- [ ] Achievement badges for credit usage
- [ ] Streak rewards (consecutive rides with discounts)
- [ ] Seasonal credit bonuses
- [ ] Credit leaderboard

## API Integration (Future)

### Endpoints Needed

```
GET  /api/transactions          # Fetch transaction history
GET  /api/balance               # Get current balance
POST /api/transactions/credit   # Add credits (admin)
GET  /api/rides/:id/discount    # Get discount applied to ride
```

## Testing Scenarios

### Visual Testing

- [x] Hero section displays balance correctly
- [x] Transaction cards render with proper styling
- [x] Credit vs Debit visual differentiation
- [x] Empty state when no transactions
- [x] Info card visibility

### Interaction Testing

- [x] Back button animation and navigation
- [x] Card entrance animations
- [x] Scroll behavior
- [ ] Pull-to-refresh (future)

### Edge Cases

- [ ] Balance of 0
- [ ] Very large transaction history (pagination)
- [ ] Expired credits
- [ ] Negative balance scenarios
- [ ] Long transaction descriptions (text wrapping)

## Accessibility

### Current Implementation

- Semantic text hierarchy
- High contrast colors (WCAG AA compliant)
- Touch targets minimum 40x40dp

### Future Improvements

- [ ] Screen reader labels
- [ ] Dynamic font sizing
- [ ] High contrast mode
- [ ] Reduced motion support

## Performance Considerations

### Current

- FlatList for transaction rendering (consider for large lists)
- Memoization of transaction cards
- Optimized animations using Reanimated native driver

### Future Optimizations

- Pagination/infinite scroll for large datasets
- Transaction caching
- Skeleton loading states

## Notes for Developers

1. **Styling Consistency**: Always use `styles.js` from this folder. Do not create inline styles.
2. **Animation Guidelines**: Use Reanimated for all animations. Keep duration under 400ms for perceived performance.
3. **Color System**: Reference OK2GO brand colors from the styles file, never hard-code hex values.
4. **Testing**: Test with both 0 balance and various transaction scenarios.

## Credits

Designed to match premium quality of:

- FinalCarousel (OK2GO design system reference)
- CompletedRides (layout patterns)
- SideMenu (navigation integration)

---

**Version**: 1.0.0  
**Last Updated**: December 2025  
**Maintained by**: OK2GO Team
