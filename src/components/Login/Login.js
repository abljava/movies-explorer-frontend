import React from 'react';
import { Link } from 'react-router-dom';

import Preloader from '../Preloader/Preloader'

import './Login.css';

function Login() {
  return (
    <>
      <div className='login'>
        <Link to='/'>
          <div className='logo' />
        </Link>
        <form className='login__form' name='signin'>
          <h2 className='login__title'>Рады видеть!</h2>
          <fieldset className='login__inputs'>
            <label>
              <p className='login__input-title'>E-mail</p>
              <input
                type='email'
                className='login__input'
                name='email'
                id='email-input'
                placeholder='pochta@yandex.ru'
                minLength='2'
                maxLength='40'
                required
              />
            </label>
            <label>
              <p className='login__input-title'>Пароль</p>
              <input
                type='password'
                className='login__input'
                name='password'
                id='password-input'
                placeholder=''
                minLength='8'
                maxLength='16'
                required
              />
            </label>
          </fieldset>
          <button className='login__submit-button button'>
          Войти
          </button>
          <p className='login__text'>
          Ещё не зарегистрированы?{' '}
            <span>
              <Link to='/signup' className='login__login-link link'>
              Регистрация
              </Link>
            </span>{' '}
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;
