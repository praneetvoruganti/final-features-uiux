// Smart Suggestions Carousel Data - Complete standalone dataset
// Includes expandable Quick Guides with detailed step-by-step instructions

export const suggestionCategories = [
  {
    id: 'ok2go_way',
    title: 'The OK2GO Way',
    cards: [
      {
        id: 'promo-1',
        icon: 'smile',
        title: 'No Promises, Only Vibes',
        description:
          "We genuinely can't promise a ride every time. But when you get one, you pay directly to the driver. (Because middlemen are annoying AF.)",
      },
      {
        id: 'promo-2',
        icon: 'dollar-sign',
        title: 'Too Broke for Discounts',
        description:
          "Discount code? Lol, nice try. Fair fares, pay direct. (Honestly, we're counting coins just like you.)",
      },
      {
        id: 'promo-3',
        icon: 'gift',
        title: 'Refer & Earn... Eventually',
        description:
          'Share your code with friends. If they use it, and if we ever build a wallet, you might get something. Maybe.',
      },
      {
        id: 'promo-4',
        icon: 'trending-down',
        title: 'No Surge, Only Chill',
        description:
          'Raining outside? Other apps curse you with "dynamic pricing." We just give you the same boring fare.',
      },
      {
        id: 'promo-5',
        icon: 'users',
        title: 'Driver > Algorithm',
        description:
          'Here, humans decide the ride. Not some overpaid math formula pretending to be fair.',
      },
    ],
  },
  {
    id: 'app_guides',
    title: 'Quick Guides',
    cards: [
      {
        id: 'guide-1',
        icon: 'calendar',
        title: 'How to Schedule a Ride',
        description:
          "Tap 'Schedule' on the main screen. Pick a time. Hope for the best. That's it.",
        highlight: 'Try scheduling a ride',
        expandable: true,
        detailedGuide: {
          steps: [
            "1. Open the OK2GO app and look for the 'Schedule Ride' button on your main screen",
            '2. Select your pickup location - either use your current location or search for a specific address',
            '3. Enter your destination by typing or selecting from recent trips',
            '4. Choose date and time - you can schedule up to 7 days in advance',
            '5. Pick your vehicle type based on your needs (economy, comfort, etc.)',
            '6. Review fare estimate and confirm your scheduled ride',
            "7. You'll get a confirmation with ride details and driver assignment closer to pickup time",
          ],
          tips: [
            '💡 Pro tip: Schedule 15 minutes earlier than needed for buffer time',
            "📱 You'll receive push notifications about your upcoming ride",
            '🔄 You can modify or cancel scheduled rides up to 30 minutes before pickup',
          ],
        },
      },
      {
        id: 'guide-2',
        icon: 'share-2',
        title: 'Sharing Your ETA',
        description:
          "During a ride, you can share your trip status. It's one of the few things that actually works reliably.",
        highlight: 'Learn about safety features',
        expandable: true,
        detailedGuide: {
          steps: [
            "1. Once your ride starts, look for the 'Share Trip' icon in the top right corner",
            "2. Tap 'Share Trip Details' to see sharing options",
            '3. Choose how to share: SMS, WhatsApp, or copy link',
            '4. Select contacts from your phone or enter numbers manually',
            '5. Your contacts will receive a live link with your real-time location',
            '6. They can track your journey progress and estimated arrival time',
            '7. Sharing automatically stops when the trip ends',
          ],
          tips: [
            '🛡️ Safety first: Always share rides with trusted contacts during night trips',
            '📍 Shared location updates every 30 seconds for accurate tracking',
            '⏰ Recipients get notifications when you reach your destination safely',
          ],
        },
      },
      {
        id: 'guide-3',
        icon: 'map-pin',
        title: 'Adding Multiple Stops',
        description:
          'Need to run errands? Add a second stop by tapping the `+` icon next to your destination. The driver will love it.',
        highlight: 'Plan a multi-stop trip',
        expandable: true,
        detailedGuide: {
          steps: [
            "1. After entering your main destination, look for the '+' icon or 'Add Stop' option",
            '2. Tap to add additional stops (maximum 3 stops allowed per trip)',
            '3. Enter each stop address and arrange them in your preferred order',
            '4. You can drag and reorder stops before confirming the route',
            '5. Review the updated fare - additional stops may increase the total cost',
            '6. Confirm your multi-stop trip and wait for driver acceptance',
            '7. During the ride, driver will follow the sequence you set',
          ],
          tips: [
            '⏱️ Each stop is limited to 5 minutes - longer waits may incur additional charges',
            '💰 Adding stops increases fare based on distance and time',
            '📝 Be specific with stop addresses to avoid confusion during the trip',
          ],
        },
      },
      {
        id: 'guide-4',
        icon: 'navigation',
        title: 'Airport Runs Made Simple',
        description:
          'Choose "Airport Ride." Enter flight time. Pray your cousin doesn\'t call asking for "pickup duty" instead.',
        highlight: 'Book an airport ride',
        expandable: true,
        detailedGuide: {
          steps: [
            "1. Select 'Airport Ride' from the main screen or vehicle options",
            "2. Choose pickup: 'To Airport' or 'From Airport'",
            '3. Enter your flight details: airline, flight number, and departure/arrival time',
            '4. For airport pickups: Add 30-45 minutes buffer for traffic and security',
            "5. For airport drops: Check airline's recommended arrival time (usually 2-3 hours early)",
            '6. Select vehicle type based on luggage needs',
            '7. Confirm booking - drivers get flight info for better timing',
          ],
          tips: [
            '✈️ For departures: Book ride 3 hours before domestic, 4 hours before international flights',
            '🧳 Choose larger vehicle if you have multiple heavy bags',
            '📞 Driver will call if flight delays are detected automatically',
          ],
        },
      },
      {
        id: 'guide-5',
        icon: 'clock',
        title: 'Hourly Packages',
        description:
          'Need a car + driver on tap? Hourly rentals exist so you can feel like a CEO without actually being one.',
        highlight: 'Try hourly rentals',
        expandable: true,
        detailedGuide: {
          steps: [
            "1. Go to 'Hourly Packages' section on the main screen",
            '2. Choose duration: 2 hours minimum, up to 12 hours maximum',
            '3. Select your starting location (usually your current location)',
            '4. Pick vehicle category based on your needs and group size',
            '5. Review package details: included kilometers and time limits',
            '6. Confirm booking and wait for driver assignment',
            '7. Use the car for multiple destinations within your booked time',
          ],
          tips: [
            '🚗 Perfect for shopping trips, sightseeing, or multiple meetings',
            '📊 Hourly packages often cheaper than multiple point-to-point rides',
            '⏰ Extra time charges apply if you exceed your booked duration',
          ],
        },
      },
    ],
  },
  {
    id: 'city_tips',
    title: 'Hyderabad Insider Tips',
    cards: [
      {
        id: 'tip-1',
        icon: 'coffee',
        title: 'Biryani Wars',
        description:
          'Paradise vs. Shah Ghouse vs. Bawarchi. Choose wisely. Friendships have ended over this.',
      },
      {
        id: 'tip-2',
        icon: 'sun',
        title: 'Irani Chai & Osmania Biscuits',
        description:
          "Best consumed at midnight, plotting life decisions you won't follow through on.",
      },
      {
        id: 'tip-3',
        icon: 'alert-triangle',
        title: 'Traffic Hacks',
        description:
          'No hack. Just pain. Leave an hour early. Or surrender to the metro like the rest of us.',
      },
      {
        id: 'tip-4',
        icon: 'zap',
        title: 'Metro is Your Friend',
        description:
          'Hyderabad Metro > sitting in a cab crying at Gachibowli signal. Trust us.',
      },
      {
        id: 'tip-5',
        icon: 'compass',
        title: 'Charminar Chai Break',
        description:
          'Go for the view, stay for the chai. And yes, bargaining in Laad Bazaar is a core workout.',
      },
      {
        id: 'tip-6',
        icon: 'moon',
        title: 'Late-Night Shawarma',
        description:
          'After 11 pm, shawarma stalls appear like Pokémon. Follow the crowd, not Google Maps.',
      },
    ],
  },
  {
    id: 'health_hustle',
    title: 'Health & Hustle',
    cards: [
      {
        id: 'health-1',
        icon: 'activity',
        title: 'Steps = Therapy',
        description:
          'Missed your gym sesh? Walk while fake arguing with people in your head. Calories + character growth.',
      },
      {
        id: 'health-2',
        icon: 'droplet',
        title: 'Hydration Reminder',
        description:
          'Your pee should not look like Red Bull. \nDrink water. (Right now would be good)',
      },
      {
        id: 'health-3',
        icon: 'maximize-2',
        title: "Stretch Like Nobody's Watching",
        description:
          'Waiting for your cab? Touch your toes. People will stare, but your spine will thank you.',
      },
      {
        id: 'health-4',
        icon: 'heart',
        title: 'Snack Smart',
        description:
          'Hyderabadi samosas are elite. \nJust... maybe not every single day. Balance it with fruit once in a while.',
      },
      {
        id: 'health-5',
        icon: 'wind',
        title: 'Breathe, Bro',
        description:
          "Traffic stress? Inhale 4s, hold 4s, exhale 4s. Don't do it too loud though - we don't know what the driver may think though.",
      },
      {
        id: 'health-6',
        icon: 'sunrise',
        title: 'Vitamin Sunlight',
        description:
          "Not touched grass in days? Sit shotgun, roll the window down, pretend you're in a road-trip movie.",
      },
    ],
  },
  {
    id: 'city_trivia',
    title: 'City Trivia',
    cards: [
      {
        id: 'fact-1',
        icon: 'anchor',
        title: 'Charminar',
        description:
          'Built in 1591. Legend says it was for plague relief. Or maybe just the original flex of "meet me at Charminar."',
      },
      {
        id: 'fact-2',
        icon: 'feather',
        title: 'Hussain Sagar',
        description:
          'This lake is older than most countries (1563). Today, half the city still calls it "Tank Bund traffic."',
      },
      {
        id: 'fact-3',
        icon: 'award',
        title: 'Golconda Diamonds',
        description:
          'The Koh-i-Noor and Hope Diamond came from Golconda mines. Your engagement ring? Probably not.',
      },
      {
        id: 'fact-4',
        icon: 'archive',
        title: 'Salar Jung Museum',
        description:
          'One man collected 40,000+ artifacts. Proof that "just one more thing" is a centuries-old habit.',
      },
      {
        id: 'fact-5',
        icon: 'home',
        title: 'Falaknuma Palace',
        description:
          'It has a dining table for 101 guests. Imagine a splitwise on that bill.',
      },
      {
        id: 'fact-6',
        icon: 'book-open',
        title: 'Osmania University',
        description:
          'Founded in 1918. Still the only place where exams feel harder than Hyderabad traffic.',
      },
      {
        id: 'fact-7',
        icon: 'star',
        title: 'Birla Mandir',
        description:
          'Made entirely of white marble from Rajasthan. Took 10 years. Your pending tasks suddenly feel lighter.',
      },
      {
        id: 'fact-8',
        icon: 'film',
        title: 'Ramoji Film City',
        description:
          "World's largest film studio complex. Also the only place where you can see a palace and a village in one rickshaw ride.",
      },
      {
        id: 'fact-9',
        icon: 'message-circle',
        title: 'Hyderabadi Lingo',
        description:
          '"Hau" means yes. "Nakko" means no. "Baigan" means... everything. Master this, you\'re half local.',
      },
    ],
  },
];
