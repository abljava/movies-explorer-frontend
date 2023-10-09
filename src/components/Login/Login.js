import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Preloader from '../Preloader/Preloader';

import './Login.css';

const useValidation = (value, validators) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [isEmailError, setIsEmailError] = useState(false);
  const [minLength, setMinLength] = useState(false);
  const [maxLength, setMaxLength] = useState(false);

  useEffect(() => {
    for (const validation in validators) {
      switch (validation) {
        case 'isEmpty':
          value ? setIsEmpty(false) : setIsEmpty(true);
          break;
        case 'isEmailError':
          const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
          re.test(String(value).toLowerCase())
            ? setIsEmailError(false)
            : setIsEmailError(true);
          break;
        case 'minLength':
          value.length < validators[validation]
            ? setMinLength(true)
            : setMinLength(false);
          break;
        case 'maxLength':
          value.length > validators[validation]
            ? setMaxLength(true)
            : setMaxLength(false);
          break;

        default:
      }
    }
  }, [value]);

  return { isEmpty, minLength, maxLength, isEmailError };
};

const useInput = (initialValue, validators) => {
  const [value, setValue] = useState(initialValue);
  const [isTouched, setIsTouched] = useState(false);
  const isValid = useValidation(value, validators);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlur = (e) => {
    setIsTouched(true);
  };

  return { value, onChange, onBlur, isTouched, ...isValid };
};

function Login() {
  const email = useInput('', {
    isEmpty: true,
    isEmailError: false,
  });

  const password = useInput('', {
    isEmpty: true,
    minLength: 6,
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
                    className='login__input'
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
                    className='login__input'
                    id='password-input'
                    placeholder=''
                    minLength='8'
                    maxLength='16'
                    required
                  />
                   {password.isTouched && password.isEmpty ? (
                    <div className='input-error'>Обязательное поле</div>
                  ) : (
                    password.minLength && (
                      <div className='input-error'>
                        Минимум 6 символов
                      </div>
                    )
                  )}
                </label>
              </fieldset>
            </form>
          </div>
          <div className='login__submit'>
            <button type='submit' className='login__submit-button button'>
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
