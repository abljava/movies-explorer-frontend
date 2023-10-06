import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import NavMobile from '../NavMobile/NavMobile';
import NavBurger from '../NavBurger/NavBurger';
import './Header.css';

function Header() {
  const location = useLocation();
  const [loggedIn, setLoggedIn] = useState(true);
  const [isNavMobileOpen, setIsNavMobileOpen] = useState(false);

  function handleBurgerClick() {
    setIsNavMobileOpen(true);
  }

  function handleNavMobileClose() {
    setIsNavMobileOpen(false);
  }

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
      <NavBurger onNavMobile={handleBurgerClick} />
      <NavMobile isOpen={isNavMobileOpen} onClose={handleNavMobileClose} />
    </header>
  );
}

export default Header;
