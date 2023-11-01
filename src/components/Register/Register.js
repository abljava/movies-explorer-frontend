import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import useValidation from '../../utils/validation';
import { REGEX_EMAIL } from '../../utils/config';

import './Register.css';

function Register({ handleRegistration, isError, setIsError }) {
  const location = useLocation();
  const navigate = useNavigate();

  //сбрасываем сообщение ошибки/успеха при смене роута
  useEffect(() => {
    if (location.pathname === '/signup') {
      setIsError('');
    }
  }, [location, setIsError]);

  //залогиненный пользователь не может попасть на страницу регистрации
  useEffect(() => {
    if (localStorage.token) {
      navigate('/movies', { replace: true });
    }
  }, [navigate]);

  const { handleChange, values, errors, isInputValid, isFormValid } =
    useValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegistration(values);
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
                  pattern={REGEX_EMAIL}
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
            <span className='input-error input-error_top'>{isError}</span>
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
