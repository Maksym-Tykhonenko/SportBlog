export const carts = [
    {
        id: '1',
        name: `Poker: Texas Hold'em`,
        winningCombinations: `
        1) Royal Flush - A, K, Q, J, 10 of the same suit.
        2) Straight Flush - Five consecutive cards of the same suit.
        3) Four of a Kind - Four cards of the same rank.
        4) Full House - Three cards of one rank and two cards of another.
        5) Flush - Five cards of the same suit.
        6) Straight - Five consecutive cards of different suits.
        7) Three of a Kind - Three cards of the same rank.
        8) Two Pair - Two sets of pairs.
        9) One Pair - One set of a pair.
        10) High Card - None of the above, the highest card wins.`,
         howToWin: `Be strategic with your starting hands. Pay attention to your opponents' behavior. Practice the art of bluffing.`
    },
    {
        id: '2',
        name: `Blackjack`,
        winningCombinations: 'The goal is to have a hand value as close to 21 as possible without exceeding it. Getting a natural Blackjack, an Ace and a 10-value card, is the best hand.',
        howToWin: 'Learn basic strategy for hitting, standing, doubling down, and splitting. Manage your bankroll and set win/loss limits. Avoid taking unnecessary risks.'
    },
    {
        id: '3',
        name: `Bridge`,
        winningCombinations: 'In Bridge, you win by meeting the contract you bid for during the auction. There are no specific card combinations to form.',
        howToWin: `Communicate effectively with your partner. Plan your bidding based on your hand's strength. Pay attention to your opponents' signals and adjust your play accordingly.`,
    },
    {
        id: '4',
        name: `Spades`,
        winningCombinations: `In Spades, the goal is to fulfill your bid by taking the number of tricks you committed to. Spades are always the trump suit.`,
        howToWin: `Bid based on your hand's strength and your partner's bid. Coordinate with your partner on strategy.
Track which Spades have been played and adapt your tactics.`,
    },
    {
        id: '5',
        name: `Rummy`,
        winningCombinations: 'In Rummy, you win by forming valid sets and sequences with your cards.',
   howToWin:  `Prioritize forming sequences. Observe your opponents' discards.
Minimize points in your hand by discarding high-value cards.`,
     
    },
    {
        id: '6',
        name: `Solitaire`,
        winningCombinations: 'In Solitaire, the game is won when you arrange all cards in ascending order in foundation piles.',
       howToWin: `Plan your moves in advance. Reveal facedown cards strategically.
Create foundations in the correct order.`,
    },
     {
        id: '7',
        name: `Hearts`,
        winningCombinations: 'In Hearts, the objective is to have the fewest points. You win by avoiding taking hearts and the Queen of Spades.',
        howToWin: `Pass undesirable cards to your opponents. Control the lead to avoid taking hearts.
Be cautious with leading hearts early in the game.` ,
    },
     {
        id: '8',
        name: `Gin Rummy`,
        winningCombinations: 'In Gin Rummy, you win by forming valid sets and sequences and having fewer points in deadwood.',
        howToWin: `Keep deadwood low by forming sets and sequences.Pay attention to your opponent's discards and draws.
Calculate your opponent's potential hand.`,
    },
     {
        id: '9',
        name: `Canasta`,
        winningCombinations: 'In Canasta, you win by accumulating melds of the same rank. Points are scored for specific card combinations.',
        howToWin: `Build melds effectively and control the discard pile. Protect your cards from being frozen.
Pay attention to wild cards and bonuses.`,
    },
     {
        id: '10',
        name: `Crazy Eights`,
        winningCombinations: 'Crazy Eights is won by being the first to empty your hand.',
       howToWin: `Use the eight cards strategically to change the suit. Track your opponents' cards and adapt your strategy.
Aim to get rid of high-value cards early to make it difficult for opponents.` ,
    },
]