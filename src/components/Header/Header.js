import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import NavMobile from '../NavMobile/NavMobile';
import './Header.css';

function Header() {
  const location = useLocation();
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <header
      className={`${
        location.pathname === '/' ? 'header_dark' : ''
      } header page__centered`}
    >
      <Link to='/'>
        <div className='logo' />
      </Link>
      <Navigation loggedIn={loggedIn} />
      {/* <NavMobile /> */}
    </header>
  );
}

export default Header;
