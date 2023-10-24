import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useValidation from '../../utils/validation';
import { login } from '../../utils/authApi';
import { regexEmail } from '../../utils/config';

import './Login.css';

function Login({ handleLogin }) {
  const navigate = useNavigate();

  const { handleChange, values, errors, isInputValid, isFormValid } =
    useValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(values.email, values.password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          handleLogin();
          navigate('/movies', { replace: true });
        }
      })
      .catch((err) => {
        console.log(`Ошибка авторизации: `, err);
      });
  };

  return (
    <>
      <main className='login'>
        <div className='login__container'>
          <div className='login__items'>
            <Link to='/'>
              <div className='logo' />
            </Link>
            <h1 className='login__title'>Рады видеть!</h1>
            <form
              onSubmit={handleSubmit}
              id='login'
              className='login__form'
              name='signin'
            >
              <fieldset className='login__inputs'>
                <label className='login__input-container'>
                  <span className='login__input-title'>E-mail</span>
                  <input
                    onChange={handleChange}
                    value={values.email || ''}
                    name='email'
                    type='email'
                    className={`login__input ${!isInputValid.email ? 'login__input_error' : ''} `}
                    id='email-input'
                    placeholder='Введите email'
                    minLength={2}
                    maxLength={30}
                    pattern={regexEmail}
                    required
                  />
                  <span className='input-error'>{errors.email}</span>
                </label>
                <label className='login__input-container'>
                  <span className='login__input-title'>Пароль</span>
                  <input
                    onChange={handleChange}
                    value={values.password || ''}
                    name='password'
                    type='password'
                    className={`login__input ${!isInputValid.password ? 'login__input_error' : ''} `}
                    id='password-input'
                    placeholder='Введите пароль'
                    minLength={8}
                    maxLength={16}
                    required
                  />
                  <span className='input-error'>{errors.password}</span>
                </label>
              </fieldset>
            </form>
          </div>
          <div className='login__submit'>
            <button
              form='login'
              disabled={!isFormValid}
              type='submit'
              className={`button login__submit-button ${
                !isFormValid ? 'login__submit-button_disabled' : ''
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
