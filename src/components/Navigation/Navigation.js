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
            <Link to='/movies'>
              <p
                className={`${
                  location.pathname === '/movies' ? 'navigation__item_bold' : ''
                } navigation__item`}
              >
                Фильмы
              </p>
            </Link>
            <Link to='/saved-movies'>
              <p
                className={`${
                  location.pathname === '/saved-movies'
                    ? 'navigation__item_bold'
                    : ''
                } navigation__item`}
              >
                Сохранённые фильмы
              </p>
            </Link>
          </nav>
          <Link to='/profile'>
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
