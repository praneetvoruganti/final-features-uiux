// Smart Suggestions Carousel Data - OK2GO Version

export const suggestionCategories = [
  {
    id: 'app_guides',
    title: 'Quick Guides',
    cards: [
      {
        id: 'guide-1',
        icon: 'star',
        title: 'How to Schedule a Ride',
        description:
          'Need a cab at a fixed time? Use Schedule, lock your fare upfront, and we show up when you say.',
        highlight: 'Try scheduling a ride',
        expandable: true,
        detailedGuide: {
          steps: [
            '1. Open the OK2GO app and tap the Schedule option on the home screen.',
            '2. Choose your pickup point – use current location or search for a specific address.',
            '3. Enter your drop location (home, office, airport, etc.).',
            '4. Select the date and time you want the cab to arrive.',
            '5. Pick your vehicle type based on seats and luggage space.',
            '6. Review the flat, upfront fare – no surge, no hidden fees. You pay the driver directly after the trip.',
            '7. Confirm the booking. You’ll see your scheduled ride under My Trips; we assign a driver closer to pickup time.',
          ],
          tips: [
            '- Pro tip: Keep a 10–15 minute buffer on your pickup time for traffic and elevator drama.',
            '- You’ll receive notifications about your upcoming ride and driver assignment.',
            '- You can modify or cancel scheduled rides from My Trips up to a little before pickup (see FAQs for timings).',
          ],
        },
      },
      {
        id: 'guide-2',
        icon: 'star',
        title: 'Sharing Your ETA',
        description:
          'Heading home late or to the airport? Share your live trip so family tracks you instead of spamming “reached aa?”.',
        highlight: 'Learn about safety features',
        expandable: true,
        detailedGuide: {
          steps: [
            '1. Once your OK2GO ride starts, open the trip screen.',
            '2. Tap the Share Trip / Share ETA icon.',
            '3. Choose how to share: SMS, WhatsApp, or copy link.',
            '4. Select contacts from your phone or enter numbers manually.',
            '5. Your contacts receive a live link with your real-time location and ETA.',
            '6. They can track your journey progress till the ride ends.',
            '7. Sharing stops automatically once you complete the trip.',
          ],
          tips: [
            '- Safety first: Always share your ride with a trusted contact on late-night trips.',
            '- Ask close family to pin the link in chat so they don’t lose it mid-lecture.',
            '- Recipients see when you start, move, and reach – no need for constant calls.',
          ],
        },
      },
      {
        id: 'guide-3',
        icon: 'star',
        title: 'Adding Multiple Stops',
        description:
          'Groceries, friend pickup, then home? Add extra stops and let your OK2GO driver follow the plan.',
        highlight: 'Plan a multi-stop trip',
        expandable: true,
        detailedGuide: {
          steps: [
            '1. After entering your main destination, tap the + icon or Add Stop option.',
            '2. Add additional stops (e.g., friend’s place, store, school) – up to 3 per trip.',
            '3. Arrange the order of stops by dragging them before confirming.',
            '4. Check the updated fare estimate – extra distance and time are included.',
            '5. Confirm your multi-stop ride and wait for driver assignment.',
            '6. During the ride, your driver follows the sequence of stops you set in the app.',
            '7. Need more flexibility? For many halts, try an Hourly package instead of a normal ride.',
          ],
          tips: [
            '- Keep short stops to a few minutes to avoid extra waiting charges.',
            '- Use clear landmarks for each stop to save time in smaller lanes.',
            '- For airport PeriFare trips, multi-stops may be limited – use Hourly if you have many errands.',
          ],
        },
      },
      {
        id: 'guide-4',
        icon: 'star',
        title: 'Airport & PeriFare Rides',
        description:
          'To or from the airport? PeriFare gives you fixed fares by radius – no surge, no drama, just direct-to-driver.',
        highlight: 'Book an airport ride',
        expandable: true,
        detailedGuide: {
          steps: [
            '1. On the home screen, select the Airport / PeriFare option.',
            '2. Choose whether you’re going To Airport or From Airport.',
            '3. Set your pickup and drop – the app maps you to the right PeriFare zone.',
            '4. View the fixed PeriFare shown upfront for your zone – no hidden extras.',
            '5. Pick a vehicle type based on luggage and group size.',
            '6. Confirm the booking. PeriFare is auto-applied for eligible airport rides.',
            '7. Pay the driver directly at the end of the ride as per the displayed PeriFare (plus any clearly shown extras, if applicable).',
          ],
          tips: [
            '- For departures, book so you reach 2–3 hours before flight time for domestic, even earlier for international.',
            '- Choose a larger car if you’re travelling with big suitcases or family.',
            '- Look for the PeriFare tag on your fare estimate to confirm you’re on a fixed-radius fare.',
          ],
        },
      },
      {
        id: 'guide-5',
        icon: 'star',
        title: 'Hourly Packages',
        description:
          'Meetings, shopping, temple runs or wedding work – keep a cab with you for fixed hours with OK2GO Hourly.',
        highlight: 'Try hourly rentals',
        expandable: true,
        detailedGuide: {
          steps: [
            '1. Tap the Hourly option on the OK2GO home screen.',
            '2. Choose an hourly package that fits your plan (half-day, full-day, etc. as available).',
            '3. Set your pickup location and preferred start time.',
            '4. Select the vehicle category based on your group size and comfort.',
            '5. Check what’s included – base hours and included kilometers, plus extra km/hour rates.',
            '6. Confirm the booking and wait for your driver to arrive.',
            '7. Use the cab for multiple stops and short waits within your booked time; pay the driver directly, including any extra hours or kilometers.',
          ],
          tips: [
            '- Works best for days with many stops: wedding errands, family visits, client meetings, sightseeing.',
            '- Often cheaper (and definitely calmer) than booking 5–6 separate rides.',
            '- If you know you’ll run late everywhere, pick the next higher hourly slab and relax.',
          ],
        },
      },
    ],
  },
  {
    id: 'ok2go_way',
    title: 'The OK2GO Way',
    cards: [
      {
        id: 'promo-1',
        icon: 'star',
        title: 'No Promises, Only Vibes',
        description:
          'We can’t promise a cab every single time. But when you do get one, it’s zero commission, no surge, and you pay the driver directly.',
      },
      {
        id: 'promo-2',
        icon: 'star',
        title: 'Too Broke for Discounts',
        description:
          'No fake 80% off banners here. Just clear, honest fares that don’t punish you for booking in peak hour.',
      },
      {
        id: 'promo-3',
        icon: 'star',
        title: 'Refer & Earn (For Real)',
        description:
          'Share your code, get friends on OK2GO. We quietly keep track of it and roll out rewards and wallet credits as features go live.',
      },
      {
        id: 'promo-4',
        icon: 'star',
        title: 'No Surge, Only Chill',
        description:
          'Rain, peak hour, long weekend – other apps throw surge multipliers. We keep it simple: driver sets a fair price, you agree before the ride.',
      },
      {
        id: 'promo-5',
        icon: 'star',
        title: 'Driver > Algorithm',
        description:
          'Here, humans decide. Drivers see your request and fare, choose rides that work for them, and you both travel without feeling cheated.',
      },
      {
        id: 'promo-6',
        icon: 'star',
        title: 'Beta, Not Bogus',
        description:
          'Yes, the app is still learning. Some buttons are moody. But the rides, fares, and drivers are very real humans doing real work.',
      },
      {
        id: 'promo-7',
        icon: 'star',
        title: 'No Wallet Circus',
        description:
          'No scratch cards, no spin-the-wheel, no mystery cashback. Just agree a fare in the app and pay a person, not a black box.',
      },
      {
        id: 'promo-8',
        icon: 'star',
        title: 'We Pick Fewer Fights',
        description:
          'You and the driver see the fare upfront and agree before moving. Saves everyone from end-of-ride arguments and TED Talks on “company policy”.',
      },
      {
        id: 'promo-9',
        icon: 'star',
        title: 'Built for This City',
        description:
          'Made in Hyderabad for Hyderabad’s traffic, mood swings, chai breaks and group chats. If you get it, you get it.',
      },
    ],
  },
  {
    id: 'city_tips',
    title: 'Hyderabad Insider Tips',
    cards: [
      {
        id: 'tip-1',
        icon: 'star',
        title: 'Biryani Wars',
        description:
          'Mehfill vs Shah Ghouse vs Bawarchi. Choose wisely. Friendships and group chats have ended over this.',
      },
      {
        id: 'tip-2',
        icon: 'star',
        title: 'Irani Chai & Osmania',
        description:
          'Best consumed at midnight, planning a new life you’ll abandon by morning meeting.',
      },
      {
        id: 'tip-3',
        icon: 'star',
        title: 'Traffic Hacks',
        description:
          'No hack. Just pain. Leave early or accept your fate. Sometimes OK2GO + Metro is the only real combo.',
      },
      {
        id: 'tip-4',
        icon: 'star',
        title: 'Metro Is Your Friend',
        description:
          'Hyderabad Metro > sitting in a cab crying at Gachibowli signal. Even our drivers agree.',
      },
      {
        id: 'tip-5',
        icon: 'star',
        title: 'Charminar Chai Break',
        description:
          'Go for the view, stay for the chai. Bargaining in Laad Bazaar counts as both cardio and character development.',
      },
      {
        id: 'tip-6',
        icon: 'star',
        title: 'Late-Night Shawarma',
        description:
          'After 11 pm, shawarma stalls appear like Pokémon. Follow the crowd, not Google Maps.',
      },
      {
        id: 'tip-7',
        icon: 'star',
        title: 'Old City Sundays',
        description:
          'Perfect if you enjoy chaos, colour, and your mobile data giving up in narrow lanes.',
      },
      {
        id: 'tip-8',
        icon: 'star',
        title: 'Necklace Road Evenings',
        description:
          'Walk, eat pani puri, overthink your life while staring at the lake. Hyderabad therapy package.',
      },
      {
        id: 'tip-9',
        icon: 'star',
        title: 'ORR Is Not a Joyride',
        description:
          'Looks like a racetrack, is actually a serious highway. This is a real PSA disguised as a joke.',
      },
    ],
  },
  {
    id: 'health_hustle',
    title: 'Health & Hustle',
    cards: [
      {
        id: 'health-1',
        icon: 'star',
        title: 'Steps = Therapy',
        description:
          'Missed the gym? Walk while fake-arguing with people in your head. Cardio plus character growth.',
      },
      {
        id: 'health-2',
        icon: 'star',
        title: 'Hydration Reminder',
        description:
          'If your pee looks like Red Bull, it’s not vibes, it’s dehydration. Drink water. Now.',
      },
      {
        id: 'health-3',
        icon: 'star',
        title: 'Stretch While You Wait',
        description:
          'Waiting for your cab? Touch your toes. People may stare, but your spine will clap for you silently.',
      },
      {
        id: 'health-4',
        icon: 'star',
        title: 'Snack Smart(ish)',
        description:
          'Hyderabadi samosas are elite. Just maybe not every single day. Throw in some fruit so your body doesn’t complain to HR.',
      },
      {
        id: 'health-5',
        icon: 'star',
        title: 'Breathe, Bro',
        description:
          'Traffic rage building up? Inhale 4, hold 4, exhale 4. Try not to do dramatic pranayama in the driver’s ear.',
      },
      {
        id: 'health-6',
        icon: 'star',
        title: 'Vitamin Sunlight',
        description:
          'Haven’t touched grass in days? Sit shotgun, roll the window down, pretend you’re in a road-trip movie.',
      },
      {
        id: 'health-7',
        icon: 'star',
        title: 'Screen Detox Minute',
        description:
          'Look out of the window for 60 seconds instead of at your screen. The outside world is also running in 4K.',
      },
      {
        id: 'health-9',
        icon: 'star',
        title: 'Unclench Everything',
        description:
          'Unclench your jaw, drop your shoulders, breathe once deeply. Congratulations, you just did basic self-care.',
      },
    ],
  },
  {
    id: 'city_trivia',
    title: 'City Trivia',
    cards: [
      {
        id: 'fact-1',
        icon: 'star',
        title: 'Charminar',
        description:
          'Built in 1591, possibly for plague relief. Today it’s mostly for photos, meetups, and traffic confusion.',
      },
      {
        id: 'fact-2',
        icon: 'star',
        title: 'Hussain Sagar',
        description:
          'This lake is older than many countries (1563). Half the city still calls it “Tank Bund side only traffic”.',
      },
      {
        id: 'fact-3',
        icon: 'star',
        title: 'Golconda Diamonds',
        description:
          'The Koh-i-Noor and Hope Diamond came from Golconda mines. Your engagement ring? Probably not, sorry.',
      },
      {
        id: 'fact-4',
        icon: 'star',
        title: 'Salar Jung Museum',
        description:
          'One man collected 40,000+ artifacts. Proof that “just one more thing” is a centuries-old habit.',
      },
      {
        id: 'fact-5',
        icon: 'star',
        title: 'Falaknuma Palace',
        description:
          'Has a dining table for 101 guests. Imagine the group bill settlement on that dinner.',
      },
      {
        id: 'fact-6',
        icon: 'star',
        title: 'Osmania University',
        description:
          'Founded in 1918. Still the only place where exams feel tougher than Hyderabad traffic.',
      },
      {
        id: 'fact-7',
        icon: 'star',
        title: 'Birla Mandir',
        description:
          'Made entirely of white marble from Rajasthan. Took almost a decade – your pending tasks suddenly feel reasonable.',
      },
      {
        id: 'fact-8',
        icon: 'star',
        title: 'Ramoji Film City',
        description:
          'World’s largest film studio complex. Palace, village, jail – all within one long walk and one tired OK2GO ride back.',
      },
      {
        id: 'fact-9',
        icon: 'star',
        title: 'Hyderabadi Lingo',
        description:
          'Hau means yes. Nakko means no. Baigan means… everything and nothing. Master this, you’re half local.',
      },
      {
        id: 'fact-10',
        icon: 'star',
        title: 'Twin City Drama',
        description:
          'Hyderabad and Secunderabad are technically twins. Locals still debate which side has better food and worse traffic.',
      },
    ],
  },
];
