import { Link } from 'react-router-dom';
import { useState } from 'react';
import clsx from 'clsx';
import { HeaderWrapper } from './styles';
import dice from '../../images/dice.jpg';

/**
 * Header component
 *
 * @returns {ReactElement} <div>
 */
const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <HeaderWrapper
      className='navbar mb-6'
      role='navigation'
      aria-label='main navigation'
    >
      <div className='navbar-brand'>
        <Link className='navbar-item' href='/'>
          <img
            src={dice}
            width='112'
            height='28'
            alt='Logo'
            loading='lazy'
            decoding='async'
          />
        </Link>
        <button
          className={clsx('navbar-burger', showNavbar ? 'is-active' : '')}
          aria-label='menu'
          aria-expanded='false'
          data-target='mobileNavbar'
          onClick={() => setShowNavbar(!showNavbar)}
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </button>
      </div>
      <div
        id='mobileNavbar'
        className={clsx('navbar-menu', showNavbar ? 'is-block' : '')}
      >
        <div className='navbar-start'>
          {/* <Link to="/" className="navbar-item">Home</Link> */}
        </div>
        <div className='navbar-end'>
          <div className='navbar-item'>
            <div className='buttons'>
              <Link to='/' className='button is-primary'>
                <strong>Home</strong>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
