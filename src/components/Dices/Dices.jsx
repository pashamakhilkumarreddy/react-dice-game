import { useEffect, useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import Dice from '../Dice';
import Timer from '../Timer';
import { DicesWrapper } from './styles';
import { calculateUserBets } from '../../utils/helpers';

/**
 * Dices component
 *
 * @param {number} [totalDiceCount] - Prop indicating the total number of Dice
 * @param {number} [coinBalance] - Prop indicating the user balance
 * @param {number} [gameDuration] - Duration of the game
 * @param {string} [currency] - Optional prop indicating the currency type
 *
 * @returns {ReactElement} <div>
 */
const Dices = ({ totalDiceCount, coinBalance, gameDuration, currency }) => {
  const [dices, setDices] = useState([]);
  const [diceHead, setDiceHead] = useState(null);
  const [betsDisabled, setBetsDisabled] = useState(false);
  const [userBalance, setUserBalance] = useState(coinBalance);
  const [userWinnings, setUserWinnings] = useState(0);
  const [intervalTime, setIntervalTime] = useState(gameDuration);

  const memoizedDices = useMemo(
    () =>
      new Array(totalDiceCount).fill(1).map((_, i) => ({
        id: i + 1,
        bet: 0,
      })),
    [totalDiceCount],
  );

  const totalBet = useMemo(
    () => dices.reduce((acc, curr) => acc + curr['bet'], 0),
    [dices],
  );

  const incrementBetAmount = (e) => {
    try {
      e.stopPropagation();
      if (totalBet >= userBalance || betsDisabled) return;
      const diceId = Number(e.currentTarget.id);
      setDices((dices) =>
        dices.map((dice) => {
          if (dice.id === diceId) {
            const updatedDice = {
              ...dice,
              bet: dice.bet + 1,
            };
            return updatedDice;
          }
          return dice;
        }),
      );
    } catch (err) {
      console.error(err);
    }
  };

  const resetBoard = useCallback(() => {
    setDices(memoizedDices);
    setDiceHead(null);
    setBetsDisabled(false);
    setUserWinnings(0);
  }, [memoizedDices]);

  useEffect(() => {
    setDices(memoizedDices);
  }, [memoizedDices]);

  useEffect(() => {
    const setIntervalId = setInterval(() => {
      if (userBalance <= 0) {
        clearInterval(setIntervalId);
      } else {
        setBetsDisabled(true);
      }
    }, intervalTime * 1000);
    return () => clearInterval(setIntervalId);
  }, [intervalTime, userBalance]);

  useEffect(() => {
    if (!betsDisabled) return;
    gameDuration === intervalTime && setIntervalTime((val) => val + 7);
    const setTimeOutId = setTimeout(() => {
      const rolledPosition = Math.floor(Math.random() * totalDiceCount + 1);
      setDiceHead(rolledPosition);
      const result = calculateUserBets(dices, totalBet, rolledPosition);
      setUserWinnings(result);
      setUserBalance((val) => val + result);
    }, 2000);
    return () => clearTimeout(setTimeOutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [betsDisabled, totalDiceCount, dices, totalBet]);

  useEffect(() => {
    if (!diceHead) return;
    const setTimeOutId = setTimeout(() => {
      resetBoard();
    }, 5000);
    return () => clearTimeout(setTimeOutId);
  }, [diceHead, resetBoard]);

  return (
    <>
      <div className='container is-fluid mb-6'>
        <div className='content has-text-centered'>
          <p className='is-size-3 mb-2'>Welcome to dice game</p>
          <p className='is-size-5'>
            Please click on any dice card to place your bet.
            <br />
            <strong>
              <em>
                (Max allowed bet is {currency}
                {userBalance})
              </em>
            </strong>
          </p>

          <p className='is-size-5'>
            Your bet amount: {currency}
            {totalBet}
            <br />
            {!betsDisabled && (
              <em>
                Remaining balance: {currency}
                {userBalance - totalBet}
              </em>
            )}
          </p>
        </div>
      </div>

      <DicesWrapper className='columns is-mobile is-centered is-vcentered is-multiline mx-2 mb-4'>
        {dices.map((dice, i) => {
          return (
            <div className='column' key={i.toString()}>
              <Dice
                betsDisabled={betsDisabled || !userBalance}
                position={i + 1}
                clickHandler={incrementBetAmount}
                currency={currency}
                dice={dice}
              />
            </div>
          );
        })}
      </DicesWrapper>
      {!betsDisabled && !!userBalance && (
        <Timer gameTime={gameDuration} reset={betsDisabled} />
      )}
      {!diceHead && !userBalance && (
        <div className='container is-fluid my-3'>
          <div className='content has-text-centered'>
            <div className='is-size-2'>
              You are out of balance! No cash to play!!!
            </div>
          </div>
        </div>
      )}
      {diceHead && (
        <div className='container is-fluid my-5'>
          <div className='content has-text-centered'>
            <div className='is-size-2'>Dice rolled on {diceHead}</div>
            <div className='is-size-4'>
              {userWinnings > 0
                ? `You won ${currency}${userWinnings}`
                : `You lost ${currency}${Math.abs(userWinnings)}`}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Dices.propTypes = {
  totalDiceCount: PropTypes.number,
  coinBalance: PropTypes.number,
  gameDuration: PropTypes.number,
  currency: PropTypes.string,
};

Dices.defaultProps = {
  totalDiceCount: 6,
  coinBalance: 100,
  gameDuration: 10,
  currency: '$',
};

export default Dices;
