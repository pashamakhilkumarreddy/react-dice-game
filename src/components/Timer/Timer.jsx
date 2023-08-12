import { useEffect, useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { TimerWrapper } from './styles';

/**
 * Timer component
 *
 * @param {number} gameTime - Time of the game
 * @param {bool} reset - Prop to reset the timer
 *
 * @returns {ReactElement} <div>
 */
const Timer = ({ gameTime, reset }) => {
  const [currTime, setCurrTime] = useState(0);

  useEffect(() => {
    setCurrTime(gameTime);
  }, [gameTime, reset]);

  useEffect(() => {
    const setIntervalId = setInterval(() => {
      if (gameTime <= 0) {
        clearInterval(setIntervalId);
      } else {
        setCurrTime((val) => val - 1);
      }
    }, 1000);
    const setTimeOutId = setTimeout(() => {
      clearInterval(setIntervalId);
      setCurrTime(gameTime);
    }, gameTime * 1000);
    return () => {
      clearInterval(setIntervalId);
      clearTimeout(setTimeOutId);
    };
  }, [gameTime]);

  return (
    <TimerWrapper className='container is-fluid'>
      <div className='content has-text-centered'>
        <div
          className={clsx('notification is-primary is-size-5', {
            'is-danger': currTime < 4,
          })}
        >
          Draw starts in&nbsp;
          <strong>
            <em>{currTime}</em>&nbsp;
          </strong>
          seconds.
        </div>
      </div>
    </TimerWrapper>
  );
};

Timer.propTypes = {
  gameTime: PropTypes.number.isRequired,
  reset: PropTypes.bool.isRequired,
};

Timer.defaultProps = {};

export default Timer;
