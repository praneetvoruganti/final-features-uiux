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
        title: 'Hourly Packages',
        description:
          'PeriFare is radius-based pricing: we draw distance bands around your pickup and show one flat fare inside each band.',
        highlight: 'Multiple Stops -- One Booking',
        expandable: true,
        detailedGuide: {
          steps: [
            '1. Select Hourly option on the OK2GO app. Enter pickup and the first destination.',
            '2. Choose desired package (e.g., 4 hrs/40 km) and note the base fare.',
            '3. The timer/distance tracking begins against the package limits.',
            '4. Add or enter the next address for the next destination in the app.',
            "5. The app updates the driver's navigation based on the new destination.",
            '6. Pay the driver the base fare plus any charges for exceeding the booked time or distance.',
          ],
          tips: [
            '- Ideal for multiple stops or long waiting periods.',
            '- Track time and distance remaining in the app to manage overage charges.',
            '- Always confirm destination updates with the driver for continuity.',
          ],
        },
      },
      {
        id: 'guide-4',
        icon: 'star',
        title: 'Airport & PeriFare Rides',
        description:
          'PeriFare is our radius-based pricing. Around your start point or the airport, we draw distance bands and give one clear flat fare inside each band.',
        highlight: 'See how PeriFare works',
        expandable: true,
        detailedGuide: {
          steps: [
            '1. Choose your ride type on the home screen – Scheduled, Hourly or an on-demand Airport ride (To / From Airport).',
            '2. Set your pickup and drop normally. For airport rides, choose whether you’re going To Airport or From Airport.',
            '3. The app marks a centre for pricing – your pickup point for in-city rides, or the airport for airport rides.',
            '4. Around this centre, we use distance bands (for example: 0–10 km, 10–15 km). Any pickup–drop inside the same band gets one flat PeriFare.',
            '5. If your trip falls inside a PeriFare band, you’ll see a PeriFare tag and a single clear fare for that band on the estimate screen.',
            '6. Review the PeriFare, vehicle type and ride details, then confirm your booking.',
            '7. The driver sees the same PeriFare amount. At the end of the trip, you pay the driver directly as per that fare (plus any clearly shown extras, if applicable).',
          ],
          tips: [
            '- PeriFare is about distance bands, not surge. Time of day doesn’t change the band-based flat fare.',
            '- Moving from one band to the next (for example 0–10 km to 10–15 km) changes the flat fare, but it stays fixed inside that band.',
            '- You may see PeriFare on scheduled city rides, scheduled airport rides, hourly rides in supported zones, and on-demand airport rides – look for the PeriFare tag on the estimate screen.',
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
  // {
  //   id: 'ok2go_way',
  //   title: 'The OK2GO Way',
  //   cards: [
  //     {
  //       id: 'promo-1',
  //       icon: 'star',
  //       title: 'No Promises, Only Vibes',
  //       description:
  //         'No empty promises. If you get a cab, it’s zero commission, zero surge, and direct payment to the driver.',
  //     },
  //     {
  //       id: 'promo-2',
  //       icon: 'star',
  //       title: 'Too Broke for Discounts',
  //       description:
  //         'No fake 80% off banners here. Just clear, honest fares that don’t punish you for booking in peak hour.',
  //     },
  //     {
  //       id: 'promo-3',
  //       icon: 'star',
  //       title: 'Refer & Earn (For Real)',
  //       description:
  //         'Share your code. We track it quietly. Rewards and wallet credits will roll out as features go live. Real talk.',
  //     },
  //     {
  //       id: 'promo-4',
  //       icon: 'star',
  //       title: 'No Surge, Only Chill',
  //       description:
  //         "Rain or peak hour—we don't surge. Driver sets a fair price, you agree upfront. Simple, chill, transparent.",
  //     },
  //     {
  //       id: 'promo-5',
  //       icon: 'star',
  //       title: 'Driver > Algorithm',
  //       description:
  //         'Humans decide here. Drivers see the fare and destination upfront. You both agree, nobody feels cheated.',
  //     },
  //     {
  //       id: 'promo-6',
  //       icon: 'star',
  //       title: 'Beta, Not Bogus',
  //       description:
  //         'The app is learning; buttons might be moody. But the rides, fares, and drivers are real humans doing real work.',
  //     },
  //     {
  //       id: 'promo-7',
  //       icon: 'star',
  //       title: 'No Wallet Circus',
  //       description:
  //         'No scratch cards, no mystery cashback. Just agree on a fare and pay a real person, not a black box.',
  //     },
  //     {
  //       id: 'promo-8',
  //       icon: 'star',
  //       title: 'We Pick Fewer Fights',
  //       description:
  //         "Agreeing on the fare upfront saves everyone from end-of-ride arguments and TED Talks on 'company policy'.",
  //     },
  //     {
  //       id: 'promo-9',
  //       icon: 'star',
  //       title: 'Built for This City',
  //       description:
  //         'Made in Hyderabad for Hyderabad’s traffic, mood swings, chai breaks and group chats. If you get it, you get it.',
  //     },
  //   ],
  // },

  {
    id: 'ok2go_way',
    title: 'The OK2GO Way',
    cards: [
      {
        id: 'promo-1',
        icon: 'star',
        title: 'No Promises, Real Rides',
        description:
          "We can't promise a cab every time. When you do, it's 0 surge and direct pay. Middlemen are annoying AF.",
      },
      {
        id: 'promo-2',
        icon: 'star',
        title: 'No Discount Drama',
        description:
          'Discount code? Cute. We just keep fares sane and let you pay direct instead of chasing “offers”.',
      },
      {
        id: 'promo-3',
        icon: 'star',
        title: 'Refer & Earn... Eventually',
        description:
          'Share the app with your friends. If they use it, and if we ever build a wallet, you might get something. Maybe.',
      },
      {
        id: 'promo-4',
        icon: 'star',
        title: 'No Surge, Just Chill',
        description:
          'Rain, match day, long weekend—other apps spike. We mostly mind our business and keep the same boring fare.',
      },
      {
        id: 'promo-5',
        icon: 'star',
        title: 'Humans Over Algorithms',
        description:
          'Here, humans pick rides. Drivers see price and route first; algorithms can sit this one out.',
      },
      {
        id: 'promo-6',
        icon: 'star',
        title: 'Beta App, Real Values',
        description:
          'App is beta, values are not. Screens might bug, but the ride and settlement stay very real.',
      },
      {
        id: 'promo-7',
        icon: 'star',
        title: 'No Wallet Circus',
        description:
          'No coins, no loot boxes. One fare on screen, one payment to a human. That’s the whole plot.',
      },
      {
        id: 'promo-8',
        icon: 'star',
        title: 'Agree First, Ride Easy',
        description:
          'Price is agreed before move. Very unglamorous, very effective at avoiding end-of-ride drama.',
      },
      {
        id: 'promo-9',
        icon: 'star',
        title: 'Built for This City',
        description:
          'Built in Hyderabad, tuned to Hyderabad. We ship what survives real roads, not just nice decks.',
      },
    ],
  },
  // {
  //   id: 'city_tips',
  //   title: 'Hyderabad Insider Tips',
  //   cards: [
  //     {
  //       id: 'tip-1',
  //       icon: 'star',
  //       title: 'Biryani Wars',
  //       description:
  //         'Mehfill vs Shah Ghouse vs Bawarchi. Choose wisely. Friendships and group chats have ended over this.',
  //     },
  //     {
  //       id: 'tip-2',
  //       icon: 'star',
  //       title: 'Irani Chai & Osmania',
  //       description:
  //         'Best consumed at midnight, planning a new life you’ll abandon by morning meeting.',
  //     },
  //     {
  //       id: 'tip-3',
  //       icon: 'star',
  //       title: 'Traffic Hacks',
  //       description:
  //         'No hack. Just pain. Leave early or accept your fate. Sometimes OK2GO + Metro is the only real combo.',
  //     },
  //     {
  //       id: 'tip-4',
  //       icon: 'star',
  //       title: 'Metro Is Your Friend',
  //       description:
  //         'Hyderabad Metro > sitting in a cab crying at Gachibowli signal. Even our drivers agree.',
  //     },
  //     {
  //       id: 'tip-5',
  //       icon: 'star',
  //       title: 'Charminar Chai Break',
  //       description:
  //         'Go for the view, stay for the chai. Bargaining in Laad Bazaar counts as both cardio and character development.',
  //     },
  //     {
  //       id: 'tip-6',
  //       icon: 'star',
  //       title: 'Late-Night Shawarma',
  //       description:
  //         'After 11 pm, shawarma stalls appear like Pokémon. Follow the crowd, not Google Maps.',
  //     },
  //     {
  //       id: 'tip-7',
  //       icon: 'star',
  //       title: 'Old City Sundays',
  //       description:
  //         'Perfect if you enjoy chaos, colour, and your mobile data giving up in narrow lanes.',
  //     },
  //     {
  //       id: 'tip-8',
  //       icon: 'star',
  //       title: 'Necklace Road Evenings',
  //       description:
  //         'Walk, eat pani puri, overthink your life while staring at the lake. Hyderabad therapy package.',
  //     },
  //     {
  //       id: 'tip-9',
  //       icon: 'star',
  //       title: 'ORR Is Not a Joyride',
  //       description:
  //         'Looks like a racetrack, is actually a serious highway. This is a real PSA disguised as a joke.',
  //     },
  //   ],
  // },
  {
    id: 'city_tips',
    title: 'Hyderabad Insider Tips',
    cards: [
      {
        id: 'tip-1',
        icon: 'star',
        title: 'Biryani Wars',
        description:
          'Mehfill vs Shah Ghouse vs Bawarchi. Say your pick softly unless you’re ready for a full debate.',
      },
      {
        id: 'tip-2',
        icon: 'star',
        title: 'Irani Chai Therapy',
        description:
          'Irani chai + Osmania works for breakups, deadlines and random overthinking at 1 am.',
      },
      {
        id: 'tip-3',
        icon: 'star',
        title: 'Shortcut Reality Check',
        description:
          'If a shortcut looks too smart on Maps, add 10 minutes. Or trust your driver and chill.',
      },
      {
        id: 'tip-4',
        icon: 'star',
        title: 'Metro Combo Move',
        description:
          'Some days the pro move is OK2GO to Metro, Metro through chaos, cab again at the other end.',
      },
      {
        id: 'tip-5',
        icon: 'star',
        title: 'Charminar Reset',
        description:
          'Charminar plus chai resets you in ways HR workshops simply cannot.',
      },
      {
        id: 'tip-6',
        icon: 'star',
        title: 'Late-Night Shawarma Hunt',
        description:
          'After 11 pm, follow the shawarma smoke and the crowd. Signboards are optional.',
      },
      {
        id: 'tip-7',
        icon: 'star',
        title: 'Old City Sundays',
        description:
          'Old City on a Sunday is for strolling and snacking, not for tight back-to-back plans.',
      },
      {
        id: 'tip-8',
        icon: 'star',
        title: 'Necklace Road Vibes',
        description:
          'Necklace Road works best when you don’t rush it—lake, chaat, one quiet lap with your thoughts.',
      },
      {
        id: 'tip-9',
        icon: 'star',
        title: 'ORR Reality',
        description:
          'ORR looks like a racetrack, but traffic cops are not in on that joke. Respect the road.',
      },
    ],
  },

  // {
  //   id: 'health_hustle',
  //   title: 'Health & Hustle',
  //   cards: [
  //     {
  //       id: 'health-1',
  //       icon: 'star',
  //       title: 'Steps = Therapy',
  //       description:
  //         'Missed the gym? Walk while fake-arguing with people in your head. Cardio plus character growth.',
  //     },
  //     {
  //       id: 'health-2',
  //       icon: 'star',
  //       title: 'Hydration Reminder',
  //       description:
  //         'If your pee looks like Red Bull, it’s not vibes, it’s dehydration. Drink water. Now.',
  //     },
  //     {
  //       id: 'health-3',
  //       icon: 'star',
  //       title: 'Stretch While You Wait',
  //       description:
  //         'Waiting for your cab? Touch your toes. People may stare, but your spine will clap for you silently.',
  //     },
  //     {
  //       id: 'health-4',
  //       icon: 'star',
  //       title: 'Snack Smart(ish)',
  //       description:
  //         'Hyderabadi samosas are elite. Just maybe not every single day. Throw in some fruit so your body doesn’t complain to HR.',
  //     },
  //     {
  //       id: 'health-5',
  //       icon: 'star',
  //       title: 'Breathe, Bro',
  //       description:
  //         'Traffic rage building up? Inhale 4, hold 4, exhale 4. Try not to do dramatic pranayama in the driver’s ear.',
  //     },
  //     {
  //       id: 'health-6',
  //       icon: 'star',
  //       title: 'Vitamin Sunlight',
  //       description:
  //         'Haven’t touched grass in days? Sit shotgun, roll the window down, pretend you’re in a road-trip movie.',
  //     },
  //     {
  //       id: 'health-7',
  //       icon: 'star',
  //       title: 'Screen Detox Minute',
  //       description:
  //         'Look out of the window for 60 seconds instead of at your screen. The outside world is also running in 4K.',
  //     },
  //     {
  //       id: 'health-9',
  //       icon: 'star',
  //       title: 'Unclench Everything',
  //       description:
  //         'Unclench your jaw, drop your shoulders, breathe once deeply. Congratulations, you just did basic self-care.',
  //     },
  //   ],
  // },
  {
    id: 'health_hustle',
    title: 'Health & Hustle',
    cards: [
      {
        id: 'health-1',
        icon: 'star',
        title: 'Walk the Last Stretch',
        description:
          'Missed the gym? Get off a little early and walk the last stretch. Mood and steps both count.',
      },
      {
        id: 'health-2',
        icon: 'star',
        title: 'Water Check',
        description:
          'If you’ve had three coffees and no water, this is your sign to fix that ratio.',
      },
      {
        id: 'health-3',
        icon: 'star',
        title: 'Quick Stretch',
        description:
          'Neck rolls at pickup look odd for five seconds and save you five days of stiffness.',
      },
      {
        id: 'health-4',
        icon: 'star',
        title: 'Snack Balance',
        description:
          'Samosas stay. Just let one piece of fruit sneak into the week so your body doesn’t riot.',
      },
      {
        id: 'health-5',
        icon: 'star',
        title: 'Traffic Tension Check',
        description:
          'When the jam hits, check your jaw and shoulders. They tense before your temper does.',
      },
      {
        id: 'health-6',
        icon: 'star',
        title: 'Fresh Air Break',
        description:
          'Crack a window, let the city in. Five minutes of actual air beats five more doom-scrolls.',
      },
      {
        id: 'health-7',
        icon: 'star',
        title: 'Screen Detox Ride',
        description:
          'One ride a day, no earphones. Let your brain idle for a bit instead of loading another reel.',
      },
      {
        id: 'health-9',
        icon: 'star',
        title: 'Unclench & Reset',
        description:
          'Every few kilometres, unclench something—jaw, hands, plans. Small reset, big payoff later.',
      },
    ],
  },

  // {
  //   id: 'city_trivia',
  //   title: 'City Trivia',
  //   cards: [
  //     {
  //       id: 'fact-1',
  //       icon: 'star',
  //       title: 'Charminar',
  //       description:
  //         'Built in 1591, possibly for plague relief. Today it’s mostly for photos, meetups, and traffic confusion.',
  //     },
  //     {
  //       id: 'fact-2',
  //       icon: 'star',
  //       title: 'Hussain Sagar',
  //       description:
  //         'This lake is older than many countries (1563). Half the city still calls it “Tank Bund side only traffic”.',
  //     },
  //     {
  //       id: 'fact-3',
  //       icon: 'star',
  //       title: 'Golconda Diamonds',
  //       description:
  //         'The Koh-i-Noor and Hope Diamond came from Golconda mines. Your engagement ring? Probably not, sorry.',
  //     },
  //     {
  //       id: 'fact-4',
  //       icon: 'star',
  //       title: 'Salar Jung Museum',
  //       description:
  //         'One man collected 40,000+ artifacts. Proof that “just one more thing” is a centuries-old habit.',
  //     },
  //     {
  //       id: 'fact-5',
  //       icon: 'star',
  //       title: 'Falaknuma Palace',
  //       description:
  //         'Has a dining table for 101 guests. Imagine the group bill settlement on that dinner.',
  //     },
  //     {
  //       id: 'fact-6',
  //       icon: 'star',
  //       title: 'Osmania University',
  //       description:
  //         'Founded in 1918. Still the only place where exams feel tougher than Hyderabad traffic.',
  //     },
  //     {
  //       id: 'fact-7',
  //       icon: 'star',
  //       title: 'Birla Mandir',
  //       description:
  //         'Made entirely of white marble from Rajasthan. Took almost a decade – your pending tasks suddenly feel reasonable.',
  //     },
  //     {
  //       id: 'fact-8',
  //       icon: 'star',
  //       title: 'Ramoji Film City',
  //       description:
  //         'World’s largest film studio complex. Palace, village, jail – all within one long walk and one tired OK2GO ride back.',
  //     },
  //     {
  //       id: 'fact-9',
  //       icon: 'star',
  //       title: 'Hyderabadi Lingo',
  //       description:
  //         'Hau means yes. Nakko means no. Baigan means… everything and nothing. Master this, you’re half local.',
  //     },
  //     {
  //       id: 'fact-10',
  //       icon: 'star',
  //       title: 'Twin City Drama',
  //       description:
  //         'Hyderabad and Secunderabad are technically twins. Locals still debate which side has better food and worse traffic.',
  //     },
  //   ],
  // },
  {
    id: 'city_trivia',
    title: 'City Trivia',
    cards: [
      {
        id: 'fact-1',
        icon: 'star',
        title: 'Charminar',
        description:
          'Built in 1591. Legend says it was for plague relief. Or maybe just the original flex of meet me at Charminar.',
      },
      {
        id: 'fact-2',
        icon: 'star',
        title: 'Hussain Sagar',
        description:
          'This lake is older than most countries (1563). Today, half the city still calls it Tank Bund traffic.',
      },
      {
        id: 'fact-3',
        icon: 'star',
        title: 'Golconda Diamonds',
        description:
          'The Koh-i-Noor and Hope Diamond came from Golconda mines. Your engagement ring? Probably not.',
      },
      {
        id: 'fact-4',
        icon: 'star',
        title: 'Salar Jung Museum',
        description:
          'One man collected 40,000+ artifacts. Proof that just one more thing is a centuries-old habit.',
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
        icon: 'star',
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
        icon: 'star',
        title: 'Ramoji Film City',
        description:
          'World largest film studio complex. Also the only place where you can see a palace and a village in one rickshaw ride.',
      },
      {
        id: 'fact-9',
        icon: 'star',
        title: 'Hyderabadi Lingo',
        description:
          'Hau means yes. Nakko means no. Baigan means everything. Master this, you are half local.',
      },
    ],
  },
];
