import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Validation.css';

const Validation = () => {




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
            <span className='login__input-title'>E-mail</span>
            <input
              name='email'
              type='email'
              placeholder='pochta@yandex.ru'
              className='login__input'
            />

          </label>
          <label>
            <span className='login__input-title'>Пароль</span>
            <input
              name='password'
              type='password'
              placeholder=''
              className='login__input'
            />
          </label>
        </fieldset>
        <button type='submit' className='login__submit-button button'>
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


  )
}

export default Validation;
