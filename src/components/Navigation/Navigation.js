import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Navigation.css';

function Navigation({ loggedIn }) {
  const location = useLocation();

  return (
    <>
      {loggedIn ? (
        <>
          <nav className='navigation'>
            <ul className='navigation__items'>
              <li>
                <Link
                  to='/movies'
                  className={`${
                    location.pathname === '/movies'
                      ? 'navigation__item_active'
                      : ''
                  } navigation__item link`}
                >
                  Фильмы
                </Link>
              </li>
              <li>
                <Link
                  to='/saved-movies'
                  className={`${
                    location.pathname === '/saved-movies'
                      ? 'navigation__item_active'
                      : ''
                  } navigation__item link`}
                >
                  Сохранённые фильмы
                </Link>
              </li>
            </ul>
          </nav>
          <Link to='/profile' className='navigation__account-btn' >
            <div className='navigation__account'>
              <p className='navigation__account-text'>Аккаунт</p>
              <div className='navigation__account-icon'></div>
            </div>
          </Link>
        </>
      ) : (
        <nav className='navigation_unauth'>
          <Link to='/signup' className='navigation__signup link'>
            Регистрация
          </Link>
          <Link to='/signin' className='navigation__signin link'>
            <span>Войти</span>
          </Link>
        </nav>
      )}
    </>
  );
}

export default Navigation;
