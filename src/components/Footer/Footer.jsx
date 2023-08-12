import { FooterWrapper } from './styles';

/**
 * Footer component
 *
 * @returns {ReactElement} <div>
 */
const Footer = () => {
  return (
    <FooterWrapper className='footer'>
      <div className='content has-text-centered'>
        <p>
          <strong>Single Dice Betting Game</strong>&nbsp;
          <a href='https://github.com/pashamakhilkumarreddy/'>By Akhil</a>.
        </p>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
