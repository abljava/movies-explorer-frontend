import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Navi from '../Navi/Navi';
import './Header.css';

function Header() {
  const location = useLocation();
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <header
      className={`${
        location.pathname === '/' ? 'header_dark' : ''
      } header page__centered`}
    >
      <Link to='/'>
        <div className='logo' />
      </Link>
      {/* <Navi /> */}
      <Navigation loggedIn={loggedIn} />
    </header>
  );
}

export default Header;
