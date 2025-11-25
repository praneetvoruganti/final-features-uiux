# CompletedRides Component

Premium completed ride details screen with toggle between single and multiple stop views, fully compliant with OK2GO design system.

## Features

- **Toggle View Modes**: Animated toggle to switch between single destination and multiple stops
- **Single Stop View**: Clean display of source → destination with fare
- **Multiple Stops View**: Scrollable list of trip stops with staggered animations
- **OK2GO Design System**: Full compliance with brand colors, typography, spacing, and shadows
- **Spring Animations**: Premium react-native-reanimated animations
- **Responsive Layout**: Adapts to all screen sizes

## Usage

```javascript
import CompletedRideScreen from './components/CompletedRides';

// In your navigation
<Stack.Screen
  name="CompletedRide"
  component={CompletedRideScreen}
  options={{ headerShown: false }}
/>;

// Navigate with data
navigation.navigate('CompletedRide', {
  rideData: {
    vehicleType: 'Mini',
    vehicleNumber: 'AP29AZ1234',
    driverName: 'Test Driver',
    tripId: '64190',
    totalDistance: '1264 km',
    totalFare: '₹18395',
    // ... more data
  },
});
```

## Component Structure

```
CompletedRides/
├── CompletedRideScreen.js  # Main screen with toggle
├── SingleStopView.js        # Single source→destination view
├── MultipleStopsView.js     # Multiple stops view
├── styles.js                # OK2GO design system styles
├── index.js                 # Exports
└── README.md               # Documentation
```

## Design System

**Colors:**

- Primary: #EE436E (OK2GO Pink)
- Secondary: #FBDA25 (OK2GO Yellow)
- Black: #201E1E
- White: #FEFEFE

**Spacing:** 8pt grid (4, 8, 12, 16, 20, 24, 32px)

**Typography:** Proper font weights and letter spacing

**Shadows:** Three-tier system (small, medium, large)

**Animations:** Spring physics (damping: 20, stiffness: 300, mass: 0.8)

## Toggle Functionality

The toggle in the top-right corner switches between:

- **Single Pin Icon**: Single source→destination view
- **Navigation Icon**: Multiple stops view

Smooth spring animation transitions between states.

## Data Structure

```javascript
{
  vehicleType: 'Mini',
  vehicleNumber: 'AP29AZ1234',
  driverName: 'Test Driver',
  tripId: '64190',
  totalDistance: '1264 km',
  totalFare: '₹18395',

  singleStop: {
    from: 'Address 1',
    to: 'Address 2',
  },

  multipleStops: [
    {
      id: 1,
      from: 'Address 1',
      to: 'Address 2',
    },
    // ... more stops
  ],
}
```

## Integration Notes

- Replace mock data in `CompletedRideScreen.js` with actual API data
- Connect "Need Help" button to support system
- Add navigation props from your navigation stack
- Customize trip ID and fare display as needed
