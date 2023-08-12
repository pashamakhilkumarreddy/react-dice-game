/**
 * calculateUserBets
 *
 * @param {Array} bets - Array of bets
 * @param {number} totalBet - Total amount of bet
 * @param {number} head - The win token (position)
 *
 * @returns {number} - The bet amount
 */
const calculateUserBets = (bets, betAmount, head) => {
  try {
    if (!betAmount) return 0;
    let result = 0;
    bets.forEach((val) => {
      if (val.bet) {
        if (val.id === head) {
          result += val.bet * 2;
        } else {
          result -= val.bet;
        }
      }
    });
    return result;
  } catch (err) {
    console.error(err);
  }
};

export { calculateUserBets };
