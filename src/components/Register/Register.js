import React from 'react';
import { Link } from 'react-router-dom';

import './Register.css';

function Register() {
  return (
    <>
      <div className='register'>
        <Link to='/'>
          <div className='logo' />
        </Link>
        <form className='register__form' name='signup'>
          <h2 className='register__title'>Добро пожаловать!</h2>
          <fieldset className='register__inputs'>
            <label>
              <p className='register__input-title'>Имя</p>
              <input
                type='text'
                className='register__input'
                name='name'
                id='name-input'
                placeholder='Виталий'
                minLength='2'
                maxLength='40'
                required
              />
            </label>
            <label>
              <p className='register__input-title'>E-mail</p>
              <input
                type='email'
                className='register__input'
                name='email'
                id='email-input'
                placeholder='pochta@yandex.ru'
                minLength='2'
                maxLength='40'
                required
              />
            </label>
            <label>
              <p className='register__input-title'>Пароль</p>
              <input
                type='password'
                className='register__input'
                name='password'
                id='password-input'
                placeholder='••••••••••••••'
                minLength='8'
                maxLength='16'
                required
              />
            </label>
          </fieldset>
          <button className='register__submit-button button'>
            Зарегистрироваться
          </button>
          <p className='register__text'>
            Уже зарегистрированы?{' '}
            <span>
              <Link to='/signin' className='register__login-link link'>
                Войти
              </Link>
            </span>{' '}
          </p>
        </form>
      </div>
      {/* <Submit /> */}
    </>
  );
}

export default Register;
