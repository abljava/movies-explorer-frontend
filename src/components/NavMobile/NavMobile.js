import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './NavMobile.css';

function NavMobile({ isOpen, onClose }) {
  const location = useLocation();

  return (
    <>
      <div className={`nav-mobile ${isOpen ? 'nav-mobile_opened' : ''}`}>
        <div className='nav-mobile__wrapper'>
          <button
            className='nav-mobile__close-btn button'
            type='button'
            onClick={onClose}
          ></button>
          <nav className='nav-mobile__menu'>
            <ul className='nav-mobile__items'>
              <li>
                <Link
                  to='/'
                  className={`nav-mobile__item link ${
                    location.pathname === '/' ? 'nav-mobile__item_active' : ''
                  }`}
                >
                  Главная
                </Link>
              </li>
              <li>
                <Link
                  to='/movies'
                  className={`nav-mobile__item link ${
                    location.pathname === '/movies'
                      ? 'nav-mobile__item_active'
                      : ''
                  }`}
                >
                  Фильмы
                </Link>
              </li>
              <li>
                <Link
                  to='/saved-movies'
                  className={`nav-mobile__item link ${
                    location.pathname === '/saved-movies'
                      ? 'nav-mobile__item_active'
                      : ''
                  }`}
                >
                  Сохранённые фильмы
                </Link>
              </li>
            </ul>
          </nav>
          <Link to='/profile' className='nav-mobile__account'>
            <div className='nav-mobile__account-container'>
              <span className='nav-mobile__account-text'>Аккаунт</span>
              <div className='nav-mobile__account-icon'></div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default NavMobile;
