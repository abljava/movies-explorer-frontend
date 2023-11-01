import React from 'react';
import { useLocation } from 'react-router-dom';

import './NavBurger.css';

function NavBurger({ onNavMobile }) {
  const location = useLocation();

  return (
    <div className='burger'>
      <button
        className={`${
          location.pathname === '/' ? '' : 'burger__button_black'
        } burger__button button`}
        type='button'
        onClick={onNavMobile}
      ></button>
    </div>
  );
}

export default NavBurger;
