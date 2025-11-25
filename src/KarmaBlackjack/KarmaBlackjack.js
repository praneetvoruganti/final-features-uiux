import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Animated,
  Easing,
  ScrollView,
} from 'react-native';
import { styles } from './styles';
import { createDeck, calculateScore, REWARDS, LOSS_MESSAGES } from './utils';

const Card = ({ suit, value, index, isHidden, cardKey }) => {
  const translateY = React.useRef(new Animated.Value(-80)).current;
  const opacity = React.useRef(new Animated.Value(0)).current;
  const scale = React.useRef(new Animated.Value(0.85)).current;

  useEffect(() => {
    // Reset values
    translateY.setValue(-80);
    opacity.setValue(0);
    scale.setValue(0.85);

    // Animate
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 0,
        duration: 550,
        delay: index * 120,
        useNativeDriver: true,
        easing: Easing.out(Easing.bezier(0.25, 0.1, 0.25, 1)),
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        delay: index * 120,
        useNativeDriver: true,
      }),
      Animated.spring(scale, {
        toValue: 1,
        delay: index * 120,
        useNativeDriver: true,
        tension: 40,
        friction: 7,
      }),
    ]).start();
  }, [cardKey, index]);

  if (isHidden) {
    return (
      <Animated.View
        style={[
          styles.card,
          styles.hiddenCard,
          { transform: [{ translateY }, { scale }], opacity },
        ]}
      >
        <View style={styles.hiddenCardPattern} />
      </Animated.View>
    );
  }

  const isRed = suit === '♥' || suit === '♦';

  return (
    <Animated.View
      style={[styles.card, { transform: [{ translateY }, { scale }], opacity }]}
    >
      <Text
        style={[styles.cardValue, { color: isRed ? '#EE436E' : '#201E1E' }]}
      >
        {value}
      </Text>
      <Text style={[styles.cardSuit, { color: isRed ? '#EE436E' : '#201E1E' }]}>
        {suit}
      </Text>
    </Animated.View>
  );
};

const RewardModal = ({ visible, reward, isWin, onClose }) => {
  if (!reward) return null;

  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.rewardOverlay}>
        <View style={styles.rewardCard}>
          <View style={isWin ? styles.rewardBadge : styles.lossBadge}>
            <Text style={isWin ? styles.rewardBadgeText : styles.lossBadgeText}>
              {isWin ? 'WINNER' : 'HOUSE WINS'}
            </Text>
          </View>
          <Text style={styles.rewardTitle}>{reward.title}</Text>
          <Text style={styles.rewardDescription}>{reward.description}</Text>
          <View style={styles.karmaEarned}>
            <Text style={styles.karmaEarnedLabel}>Karma Change</Text>
            <Text style={styles.karmaEarnedValue}>
              {isWin ? '+' : ''}
              {reward.karma}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.collectButton}
            onPress={onClose}
            activeOpacity={0.85}
          >
            <Text style={styles.collectButtonText}>Continue</Text>
          </TouchableOpacity>
          <Text style={styles.disclaimerText}>
            *100% fake. Zero gambling. Pure vibes only.*
          </Text>
        </View>
      </View>
    </Modal>
  );
};

const KarmaBlackjack = ({ isVisible, onClose }) => {
  const [deck, setDeck] = useState([]);
  const [playerHand, setPlayerHand] = useState([]);
  const [dealerHand, setDealerHand] = useState([]);
  const [gameState, setGameState] = useState('playing'); // playing, won, lost, push
  const [currentReward, setCurrentReward] = useState(null);
  const [karmaPoints, setKarmaPoints] = useState(100); // Starting Karma
  const [handId, setHandId] = useState(0); // Track hand changes for animations

  const startNewGame = useCallback(() => {
    const newDeck = createDeck();
    const pHand = [newDeck.pop(), newDeck.pop()];
    const dHand = [newDeck.pop(), newDeck.pop()];

    setDeck(newDeck);
    setPlayerHand(pHand);
    setDealerHand(dHand);
    setGameState('playing');
    setCurrentReward(null);
    setHandId(prev => prev + 1); // Increment to trigger animations
  }, []);

  useEffect(() => {
    if (isVisible) {
      startNewGame();
    }
  }, [isVisible, startNewGame]);

  const handleHit = () => {
    const newDeck = [...deck];
    const card = newDeck.pop();
    const newHand = [...playerHand, card];

    setPlayerHand(newHand);
    setDeck(newDeck);

    if (calculateScore(newHand) > 21) {
      handleLoss();
    }
  };

  const handleStand = () => {
    let currentDeck = [...deck];
    let currentDealerHand = [...dealerHand];

    while (calculateScore(currentDealerHand) < 17) {
      currentDealerHand.push(currentDeck.pop());
    }

    setDealerHand(currentDealerHand);
    setDeck(currentDeck);

    const playerScore = calculateScore(playerHand);
    const dealerScore = calculateScore(currentDealerHand);

    if (dealerScore > 21 || playerScore > dealerScore) {
      handleWin();
    } else if (dealerScore > playerScore) {
      handleLoss();
    } else {
      setGameState('push');
    }
  };

  const handleWin = () => {
    setGameState('won');
    const randomReward = REWARDS[Math.floor(Math.random() * REWARDS.length)];
    setCurrentReward({ ...randomReward, isWin: true });
    setKarmaPoints(prev => prev + randomReward.karma);
  };

  const handleLoss = () => {
    setGameState('lost');
    const randomLoss =
      LOSS_MESSAGES[Math.floor(Math.random() * LOSS_MESSAGES.length)];
    setCurrentReward({ ...randomLoss, isWin: false });
    setKarmaPoints(prev => Math.max(0, prev + randomLoss.karma));
  };

  const getStatusMessage = () => {
    if (gameState === 'playing') return 'Make your move';
    if (gameState === 'won') return 'You win';
    if (gameState === 'lost') return 'House wins';
    if (gameState === 'push') return 'Push';
    return '';
  };

  return (
    <Modal
      visible={isVisible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.fullScreenModal}>
          {/* Header */}
          <View style={styles.header}>
            <View>
              <Text style={styles.headerTitle}>BLACKJACK</Text>
              <Text style={styles.headerSubtitle}>
                No gambling. Just vibes.
              </Text>
            </View>
            <TouchableOpacity
              onPress={onClose}
              style={styles.closeButton}
              activeOpacity={0.7}
            >
              <Text style={styles.closeButtonText}>×</Text>
            </TouchableOpacity>
          </View>

          {/* Karma Badge */}
          <View style={styles.karmaBadge}>
            <Text style={styles.karmaLabel}>KARMA</Text>
            <Text style={styles.karmaValue}>{karmaPoints}</Text>
          </View>

          <ScrollView
            style={styles.gameArea}
            contentContainerStyle={styles.gameContent}
            showsVerticalScrollIndicator={false}
          >
            {/* Dealer Section */}
            <View style={styles.dealerArea}>
              <Text style={styles.scoreLabel}>Dealer</Text>
              {gameState !== 'playing' && (
                <Text
                  style={[
                    styles.scoreLabel,
                    {
                      fontSize: 28,
                      fontWeight: '800',
                      marginTop: 0,
                      marginBottom: 16,
                      color: '#FFFFFF',
                      letterSpacing: -0.5,
                    },
                  ]}
                >
                  {calculateScore(dealerHand)}
                </Text>
              )}
              <View style={styles.handContainer}>
                {dealerHand.map((card, index) => (
                  <Card
                    key={`dealer-${handId}-${index}`}
                    cardKey={handId}
                    {...card}
                    index={index}
                    isHidden={index === 1 && gameState === 'playing'}
                  />
                ))}
              </View>
            </View>

            {/* Status Message */}
            <Text style={styles.statusText}>{getStatusMessage()}</Text>

            {/* Player Section */}
            <View style={styles.playerArea}>
              <View style={styles.handContainer}>
                {playerHand.map((card, index) => (
                  <Card
                    key={`player-${handId}-${index}`}
                    cardKey={handId}
                    {...card}
                    index={index}
                  />
                ))}
              </View>
              <Text
                style={[
                  styles.scoreLabel,
                  {
                    fontSize: 28,
                    fontWeight: '800',
                    marginTop: 16,
                    color: '#FFFFFF',
                    letterSpacing: -0.5,
                  },
                ]}
              >
                {calculateScore(playerHand)}
              </Text>
              <Text style={styles.scoreLabel}>You</Text>
            </View>

            {/* Controls */}
            <View style={styles.controls}>
              {gameState === 'playing' ? (
                <>
                  <TouchableOpacity
                    style={[styles.actionButton, styles.hitButton]}
                    onPress={handleHit}
                    activeOpacity={0.85}
                  >
                    <Text style={styles.buttonText}>Hit</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.actionButton, styles.standButton]}
                    onPress={handleStand}
                    activeOpacity={0.85}
                  >
                    <Text style={styles.standButtonText}>Stand</Text>
                  </TouchableOpacity>
                </>
              ) : (
                <TouchableOpacity
                  style={[styles.actionButton, styles.hitButton]}
                  onPress={startNewGame}
                  activeOpacity={0.85}
                >
                  <Text style={styles.buttonText}>New Hand</Text>
                </TouchableOpacity>
              )}
            </View>
          </ScrollView>

          <RewardModal
            visible={!!currentReward}
            reward={currentReward}
            isWin={currentReward?.isWin}
            onClose={() => setCurrentReward(null)}
          />
        </View>
      </View>
    </Modal>
  );
};

export default KarmaBlackjack;
