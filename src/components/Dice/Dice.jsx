import clsx from 'clsx';
import PropTypes from 'prop-types';
import { DiceWrapper } from './styles';

/**
 * Dice component
 *
 * @param {object} [dice] - Dice object
 * @param {bool} [betsDisabled] - Prop indicating if betting is displayed
 * @param {number} [position] - Position of the dice
 * @param {string} [currency] - Currency to display
 * @param {func} [clickHandler] - Function to be called on click of the component
 *
 * @returns {ReactElement} <div>
 */
const Dice = ({
  betsDisabled = false,
  position,
  clickHandler,
  dice,
  currency = '$',
}) => {
  if (!dice) return null;
  const { id, bet } = dice;
  return (
    <DiceWrapper
      id={id}
      disabled={betsDisabled}
      className={clsx([
        'box is-unselectable',
        !!bet ? 'has-background-success-light' : '',
        {
          'is-clickable': !betsDisabled,
        },
      ])}
      onClick={clickHandler}
    >
      <div className='content has-text-centered'>
        <p>
          <strong>Dice</strong> {position}
        </p>
        <p>
          <strong>Bet:</strong> {currency}
          {bet}
        </p>
      </div>
    </DiceWrapper>
  );
};

Dice.propTypes = {
  betsDisabled: PropTypes.bool,
  position: PropTypes.number,
  dice: PropTypes.object.isRequired,
  currency: PropTypes.string,
  clickHandler: PropTypes.func,
};

Dice.defaultProps = {
  betsDisabled: false,
  currency: '$',
};

export default Dice;
