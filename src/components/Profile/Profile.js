import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useInput from '../../utils/validation';
import Header from '../Header/Header';
import './Profile.css';

function Profile() {
  const [onEdit, setOnEdit] = useState(false);

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
                <input
                  type='text'
                  className='profile__input'
                  placeholder='Виталий'
                />
              </label>
              <span className='profile__input-title'>E-mail</span>
              <label className='profile__input-container'>
                <input
                  type='email'
                  className='profile__input'
                  placeholder='pochta@yandex.ru'
                />
              </label>
            </fieldset>
          </form>
          <div className='profile__submit'>
            {!onEdit && (
              <div className='profile__button-container'>
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
              </div>
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
