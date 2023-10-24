import React from 'react';
import { Link } from 'react-router-dom';
import useInput from '../../utils/validation';

import './Register.css';

function Register() {
  const username = useInput('', {
    isEmpty: true,
    minLength: 2,
    maxLength: 40,
  });

  const email = useInput('', {
    isEmpty: true,
    isEmailError: false,
  });

  const password = useInput('', {
    isEmpty: true,
    minLength: 8,
    maxLength: 16,
  });

  return (
    <main className='register'>
      <div className='register__container'>
        <div className='register__items'>
          <Link to='/'>
            <div className='logo' />
          </Link>
          <h1 className='register__title'>Добро пожаловать!</h1>
          <form className='register__form' name='signup'>
            <fieldset className='register__inputs'>
              <label>
                <span className='register__input-title'>Имя</span>
                <input
                  onChange={(e) => username.onChange(e)}
                  onBlur={(e) => username.onBlur(e)}
                  value={username.value}
                  name='name'
                  type='text'
                  className={`register__input ${
                    !username.isEmpty &&
                    (username.minLength || username.maxLength)
                      ? 'register__input_error'
                      : ''
                  }`}
                  id='name-input'
                  placeholder='Введите имя'
                  minLength='2'
                  maxLength='40'
                  required
                />{' '}
                {username.isTouched && username.isEmpty ? (
                  <div className='input-error'>Обязательное поле</div>
                ) : (
                  !username.isEmpty &&
                  (username.minLength || username.maxLength) && (
                    <div className='input-error'>
                      Введите от 2 до 40 символов
                    </div>
                  )
                )}
              </label>
              <label>
                <span className='register__input-title'>E-mail</span>
                <input
                  onChange={(e) => email.onChange(e)}
                  onBlur={(e) => email.onBlur(e)}
                  value={email.value}
                  name='email'
                  type='email'
                  className={`register__input ${
                    !email.isEmpty && email.isEmailError
                      ? 'register__input_error'
                      : ''
                  }`}
                  id='email-input'
                  placeholder='Введите email'
                  minLength='2'
                  maxLength='40'
                  required
                />
                {email.isTouched && email.isEmpty ? (
                  <div className='input-error'>Обязательное поле</div>
                ) : (
                  !email.isEmpty &&
                  email.isEmailError && (
                    <div className='input-error'>Введите корректный email</div>
                  )
                )}
              </label>
              <label>
                <span className='register__input-title'>Пароль</span>
                <input
                  onChange={(e) => password.onChange(e)}
                  onBlur={(e) => password.onBlur(e)}
                  value={password.value}
                  name='password'
                  type='password'
                  className={`register__input ${
                    !password.isEmpty &&
                    (password.minLength || password.maxLength)
                      ? 'register__input_error'
                      : ''
                  }`}
                  id='password-input'
                  placeholder='Введите пароль'
                  minLength='8'
                  maxLength='16'
                  required
                />
                {password.isTouched && password.isEmpty ? (
                  <div className='input-error'>Обязательное поле</div>
                ) : (
                  !password.isEmpty &&
                  (password.minLength || password.maxLength) && (
                    <div className='input-error'>
                      Введите от 8 до 16 символов
                    </div>
                  )
                )}
              </label>
            </fieldset>
          </form>
        </div>
        <div className='register__submit'>
          <button
            disabled={
              !email.isInputValid ||
              !password.isInputValid ||
              !username.isInputValid
            }
            type='submit'
            className={`button register__submit-button ${
              !email.isInputValid || !password.isInputValid
                ? 'register__submit-button_disabled'
                : ''
            }`}
          >
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
        </div>
      </div>
    </main>
  );
}

export default Register;
