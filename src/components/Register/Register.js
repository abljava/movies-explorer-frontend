import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../utils/authApi';
import useValidation from '../../utils/validation';
import { regexEmail } from '../../utils/config';

import './Register.css';

function Register({ handleRegistration, serverErr, setServerErr }) {
  const navigate = useNavigate();
  const { handleChange, values, errors, isInputValid, isFormValid } =
    useValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    register(values.name, values.email, values.password)
      .then((res) => {
        if (res.ok) {
          handleRegistration();
          navigate('/movies', { replace: true });
        }
        console.log(`res 2 ==>`, res);
      })
      .catch((err) => {
        setServerErr(err)
        console.log(`error registering, ${err}`);
        // ошибку сервера в компонент Register
      });
  };

  return (
    <main className='register'>
      <div className='register__container'>
        <div className='register__items'>
          <Link to='/'>
            <div className='logo' />
          </Link>
          <h1 className='register__title'>Добро пожаловать!</h1>
          <form
            onSubmit={handleSubmit}
            id='register'
            className='register__form'
            name='signup'
          >
            <fieldset className='register__inputs'>
              <label>
                <span className='register__input-title'>Имя</span>
                <input
                  onChange={handleChange}
                  value={values.name || ''}
                  name='name'
                  type='text'
                  className={`register__input ${
                    !isInputValid.name ? 'register__input_error' : ''
                  }`}
                  id='name-input'
                  placeholder='Введите имя'
                  minLength={2}
                  maxLength={30}
                  required
                />
                <span className='input-error'>{errors.name}</span>
              </label>
              <label>
                <span className='register__input-title'>E-mail</span>
                <input
                  onChange={handleChange}
                  value={values.email || ''}
                  name='email'
                  type='email'
                  className={`register__input ${
                    !isInputValid.email ? 'register__input_error' : ''
                  }`}
                  id='email-input'
                  placeholder='Введите email'
                  pattern={regexEmail}
                  required
                />
                <span className='input-error'>{errors.email}</span>
              </label>
              <label>
                <span className='register__input-title'>Пароль</span>
                <input
                  onChange={handleChange}
                  value={values.password || ''}
                  name='password'
                  type='password'
                  className={`register__input ${
                    !isInputValid.password ? 'register__input_error' : ''
                  }`}
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
        <div className='register__submit'>
          <button
            disabled={!isFormValid}
            type='submit'
            form='register'
            className={`button register__submit-button ${
              !isFormValid ? 'register__submit-button_disabled' : ''
            }`}
          >
            <span className='input-error input-error_top'>{serverErr}</span>
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
