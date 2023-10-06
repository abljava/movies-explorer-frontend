import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './NavMobile.css';

function NavMobile({ isOpen, onClose }) {
  const location = useLocation();

  return (
    <>
      <div className={`nav-mobile ${isOpen ? 'nav-mobile_opened' : ''}`}>
        <button className='nav-mobile__close-btn button' type='button' onClick={onClose} ></button>
        <nav className='nav-mobile__menu'>
          <ul className='nav-mobile__items'>
            <li>
              <Link to='/' className='nav-mobile__item link'>
                Главная
              </Link>
            </li>
            <li>
              <Link to='/movies' className='nav-mobile__item link'>
                Фильмы
              </Link>
            </li>
            <li>
              <Link to='/saved-movies' className='nav-mobile__item link'>
                Сохранённые фильмы
              </Link>
            </li>
            {/* <li>
              <Link to='/profile'>
                <div className='nav-mobile__account'>
                  <p className='nav-mobile__account-text'>Аккаунт</p>
                  <div className='nav-mobile__account-icon'></div>
                </div>
              </Link>
            </li> */}
          </ul>
        </nav>
        <Link to='/profile'>
          <div className='nav-mobile__account'>
            <span className='nav-mobile__account-text'>Аккаунт</span>
            <div className='nav-mobile__account-icon'></div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default NavMobile;
