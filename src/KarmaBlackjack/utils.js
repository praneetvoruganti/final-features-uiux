// Card suits and values
const SUITS = ['♠', '♥', '♦', '♣'];
const VALUES = [
  'A',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'J',
  'Q',
  'K',
];

export const createDeck = () => {
  const deck = [];
  for (let suit of SUITS) {
    for (let value of VALUES) {
      deck.push({ suit, value });
    }
  }
  return shuffle(deck);
};

const shuffle = deck => {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
};

export const calculateScore = hand => {
  let score = 0;
  let aces = 0;

  for (let card of hand) {
    if (['J', 'Q', 'K'].includes(card.value)) {
      score += 10;
    } else if (card.value === 'A') {
      aces += 1;
      score += 11;
    } else {
      score += parseInt(card.value);
    }
  }

  while (score > 21 && aces > 0) {
    score -= 10;
    aces -= 1;
  }

  return score;
};

export const REWARDS = [
  {
    id: 'virtual_chai',
    title: 'Virtual Chai',
    description:
      'A warm, comforting cup of digital tea. 0 calories, 100% comfort.',
    karma: 25,
  },
  {
    id: 'deep_breath',
    title: 'One (1) Deep Breath Coupon',
    description: 'Redeemable anywhere, anytime. We trust you.',
    karma: 10,
  },
  {
    id: 'free_conversation_pass',
    title: 'Free Conversation Pass',
    description:
      "Your next driver won't talk to you. Guaranteed silent ride vibes.",
    karma: 50,
  },
  {
    id: 'green_light',
    title: 'Green Light Manifestation',
    description:
      'We have mentally cleared all traffic lights for your next ride.',
    karma: 75,
  },
  {
    id: 'virtual_hug',
    title: 'Virtual Hug',
    description: 'From us to you. Consider yourself squeezed.',
    karma: 15,
  },
  {
    id: 'high_five',
    title: 'Telepathic High Five',
    description: 'Received! That was a crisp one. Good job.',
    karma: 20,
  },
  {
    id: 'zero_savings',
    title: 'You Saved ₹0.00!',
    description:
      'Congratulations! We do not have surge pricing ever. What a time to be alive.',
    karma: 5,
  },
  {
    id: 'aura_boost',
    title: 'Aura Boost +1000',
    description:
      'Your vibe is currently immaculate. Drivers will sense this immediately.',
    karma: 100,
  },
  {
    id: 'good_karma',
    title: 'Actual Good Karma',
    description: 'The universe has noted your win. Results may vary.',
    karma: 30,
  },
  {
    id: 'cool_driver',
    title: 'Cool Driver Guarantee',
    description:
      'Your next driver will have excellent taste in music. Probably.',
    karma: 60,
  },
  {
    id: 'imaginary_upgrade',
    title: 'Imaginary Premium Upgrade',
    description:
      "Feel free to pretend you're in a luxury car. Nobody will know.",
    karma: 40,
  },
  {
    id: 'perfect_temperature',
    title: 'Perfect AC Temperature',
    description:
      'Next ride will be exactly your preferred temperature. Trust us.',
    karma: 35,
  },
  {
    id: 'no_small_talk',
    title: 'Golden Silence Token',
    description:
      'You have won the right to a peaceful, quiet ride without feeling awkward.',
    karma: 55,
  },
  {
    id: 'spiritual_enlightenment',
    title: 'Spiritual Enlightenment',
    description: "You feel slightly more at peace. Or maybe you're just tired.",
    karma: 45,
  },
  {
    id: 'free_wifi_vibes',
    title: 'Unlimited Wifi Vibes',
    description: "Can't provide actual wifi, but the vibes? Unlimited.",
    karma: 25,
  },
  {
    id: 'certified_winner',
    title: 'Certified Winner Status',
    description:
      'You can now tell people you won something today. Technically true.',
    karma: 65,
  },
  {
    id: 'smooth_ride',
    title: 'Zero Potholes Manifested',
    description:
      "We've spiritually filled all potholes on your route. You're welcome.",
    karma: 70,
  },
  {
    id: 'mental_discount',
    title: 'Mental Discount',
    description: 'Feel like you paid 10% less. Same price, better mindset.',
    karma: 20,
  },
  {
    id: 'confidence_boost',
    title: 'Confidence Boost',
    description: 'You look great today. This has nothing to do with blackjack.',
    karma: 15,
  },
  {
    id: 'fast_pickup',
    title: 'Instant Pickup Illusion',
    description:
      "Your driver will arrive in... whenever they arrive. But it'll feel faster.",
    karma: 30,
  },
  {
    id: 'good_vibes_only',
    title: 'Good Vibes Certificate',
    description: "Official documentation that you're currently vibing.",
    karma: 25,
  },
  {
    id: 'stress_free',
    title: 'Stress-Free Journey Token',
    description: 'Take a deep breath. Everything is fine. Probably.',
    karma: 40,
  },
];

export const LOSS_MESSAGES = [
  {
    id: 'loss_hug',
    title: 'Virtual Hug Consolation',
    description:
      'Oof. We owe you a digital embrace. Consider yourself comforted.',
    karma: -10,
  },
  {
    id: 'participation',
    title: 'Participation Trophy',
    description:
      "You participated! That's worth something. Not karma, but something.",
    karma: -5,
  },
  {
    id: 'better_luck',
    title: 'Better Luck Next Time',
    description: "The house always wins. But hey, it's all fake anyway.",
    karma: -15,
  },
  {
    id: 'almost',
    title: 'So Close!',
    description: 'The cards said "No" but we still believe in you.',
    karma: -10,
  },
  {
    id: 'teachable_moment',
    title: 'Teachable Moment',
    description: 'You learned a valuable lesson: blackjack is hard.',
    karma: -5,
  },
  {
    id: 'moral_victory',
    title: 'Moral Victory',
    description: "You didn't win, but you looked cool trying.",
    karma: -10,
  },
  {
    id: 'free_try',
    title: 'Free Lesson in Probability',
    description: "Turns out the odds weren't in your favor. Wild.",
    karma: -15,
  },
  {
    id: 'virtual_cookie',
    title: 'Consolation Cookie',
    description: 'Have an imaginary cookie. Zero calories, zero satisfaction.',
    karma: -5,
  },
  {
    id: 'bust_sympathy',
    title: 'Bust Sympathy Points',
    description: 'That was rough. We felt it. Still taking your karma though.',
    karma: -20,
  },
  {
    id: 'dealer_wins',
    title: 'Dealer Takes This One',
    description: 'The house wins again. Shocking absolutely nobody.',
    karma: -15,
  },
  {
    id: 'learning_experience',
    title: 'Character Building Exercise',
    description: "Losing builds character. You're very characterful now.",
    karma: -10,
  },
  {
    id: 'positive_spin',
    title: "At Least It's Not Real Money",
    description:
      'Silver lining: your wallet is fine. Your pride? Different story.',
    karma: -10,
  },
  {
    id: 'next_time',
    title: 'Surely Next Time',
    description: "Law of averages says you'll win eventually. Maybe.",
    karma: -15,
  },
  {
    id: 'consolation_prize',
    title: 'Consolation: You Tried',
    description: 'A+ for effort. D- for execution.',
    karma: -5,
  },
  {
    id: 'reality_check',
    title: 'Reality Check',
    description: "Sometimes you're the windshield, sometimes you're the bug.",
    karma: -10,
  },
  {
    id: 'spiritual_growth',
    title: 'Humility Unlocked',
    description: 'Nothing teaches humility quite like a bad hand.',
    karma: -15,
  },
  {
    id: 'fake_condolences',
    title: 'Thoughts and Prayers',
    description: 'Our thoughts are with you in this difficult (fake) time.',
    karma: -5,
  },
  {
    id: 'try_again',
    title: 'Try Again Button',
    description: 'Good news: you can immediately lose more karma!',
    karma: -10,
  },
  {
    id: 'house_advantage',
    title: 'House Edge Demonstration',
    description:
      "Today you learned about statistical probability. You're welcome.",
    karma: -15,
  },
  {
    id: 'unlucky',
    title: 'Bad Luck Streak Active',
    description: "The cards weren't on your side. Neither was math.",
    karma: -20,
  },
  {
    id: 'better_tomorrow',
    title: 'Tomorrow Is Another Day',
    description:
      "Today wasn't your day. Tomorrow probably won't be either, but hope is free.",
    karma: -10,
  },
];
