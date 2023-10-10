import React from 'react';
import { Link } from 'react-router-dom';
import useInput from '../../utils/validation';

import './Login.css';

function Login() {
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
    <>
      <main className='login'>
        <div className='login__container'>
          <div className='login__items'>
            <Link to='/'>
              <div className='logo' />
            </Link>
            <h2 className='login__title'>Рады видеть!</h2>
            <form className='login__form' name='signin'>
              <fieldset className='login__inputs'>
                <label className='login__input-container'>
                  <p className='login__input-title'>E-mail</p>
                  <input
                    onChange={(e) => email.onChange(e)}
                    onBlur={(e) => email.onBlur(e)}
                    value={email.value}
                    name='email'
                    type='email'
                    className={`login__input ${
                      !email.isEmpty && email.isEmailError
                        ? 'login__input_error'
                        : ''
                    }`}
                    id='email-input'
                    placeholder='pochta@yandex.ru'
                    minLength='2'
                    maxLength='40'
                    required
                  />
                  {email.isTouched && email.isEmpty ? (
                    <div className='input-error'>Обязательное поле</div>
                  ) : (
                    !email.isEmpty &&
                    email.isEmailError && (
                      <div className='input-error'>
                        Введите корректный email
                      </div>
                    )
                  )}
                </label>
                <label className='login__input-container'>
                  <p className='login__input-title'>Пароль</p>
                  <input
                    onChange={(e) => password.onChange(e)}
                    onBlur={(e) => password.onBlur(e)}
                    value={password.value}
                    name='password'
                    type='password'
                    className={`login__input ${
                      password.minLength ? 'login__input_error' : ''
                    }`}
                    id='password-input'
                    placeholder=''
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
          <div className='login__submit'>
            <button
              disabled={!email.isInputValid || !password.isInputValid}
              type='submit'
              className={`button login__submit-button ${
                !email.isInputValid || !password.isInputValid
                  ? 'login__submit-button_disabled'
                  : ''
              }`}
            >
              Войти
            </button>
            <p className='login__text'>
              Ещё не зарегистрированы?{' '}
              <span>
                <Link to='/signup' className='login__signup-link link'>
                  Регистрация
                </Link>
              </span>{' '}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Login;
