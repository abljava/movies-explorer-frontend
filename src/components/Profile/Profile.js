import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useInput from '../../utils/validation';
import Header from '../Header/Header';
import './Profile.css';

function Profile() {
  const [onEdit, setOnEdit] = useState(false);

  const username = useInput('', {
    isEmpty: true,
    minLength: 2,
    maxLength: 40,
  });

  const email = useInput('', {
    isEmpty: true,
    isEmailError: false,
  });

  function handleEditClick() {
    setOnEdit(true);
  }

  function handleSaveClick() {
    document
      .querySelector('.profile__save-button')
      .classList.add('profile__save-button_disabled');
    document
      .querySelector('.profile__error-message')
      .classList.remove('profile__error-message_hidden');
  }

  return (
    <>
      <Header />
      <main className='profile'>
        <section className='profile__container'>
          <form className='profile__form' name='profile-form'>
            <h1 className='profile__title'>Привет, Виталий!</h1>
            <fieldset className='profile__inputs'>
              <span className='profile__input-title'>Имя</span>
              <label className='profile__input-container'>
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
                <input
                  onChange={(e) => username.onChange(e)}
                  onBlur={(e) => username.onBlur(e)}
                  value={username.value}
                  type='text'
                  className={`profile__input ${
                    !username.isEmpty &&
                    (username.minLength || username.maxLength)
                      ? 'profile__input_error'
                      : ''
                  }`}
                  placeholder='Виталий'
                />

              </label>
              <span className='profile__input-title'>E-mail</span>
              <label className='profile__input-container'>
                <input
                  onChange={(e) => email.onChange(e)}
                  onBlur={(e) => email.onBlur(e)}
                  value={email.value}
                  type='email'
                  className={`profile__input ${
                    !email.isEmpty && email.isEmailError
                      ? 'profile__input_error'
                      : ''
                  }`}
                  placeholder='pochta@yandex.ru'
                  required
                />
                {email.isTouched && email.isEmpty ? (
                  <div className='input-error input-error_bottom'>Обязательное поле</div>
                ) : (
                  !email.isEmpty &&
                  email.isEmailError && (
                    <div className='input-error input-error_bottom'>Введите корректный email</div>
                  )
                )}
              </label>
            </fieldset>
          </form>
          <div className='profile__submit'>
            {!onEdit && (
              <>
                <button
                  onClick={handleEditClick}
                  type='button'
                  className='profile__button button'
                >
                  Редактировать
                </button>
                <Link
                  to='/'
                  className='profile__button profile__button_logout button'
                >
                  Выйти из аккаунта
                </Link>
              </>
            )}
            {onEdit && (
              <>
                <div className='profile__error-message profile__error-message_hidden'>
                  При обновлении профиля произошла ошибка.
                </div>
                <button
                  onClick={handleSaveClick}
                  type='submit'
                  className='profile__button profile__save-button button'
                >
                  Сохранить
                </button>
              </>
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export default Profile;
