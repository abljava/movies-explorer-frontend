import React, { useState, useEffect, useContext } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import useValidation from '../../utils/validation';
import { regexEmail } from '../../utils/config';

import Header from '../Header/Header';
import './Profile.css';

function Profile({ loggedIn, handleLogout, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);
  const [onEdit, setOnEdit] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const {
    handleChange,
    values,
    setValues,
    errors,
    isInputValid,
    setIsInputValid,
    isFormValid,
    setIsFormValid,
  } = useValidation();

  // console.log(currentUser);

  useEffect(() => {
    if (currentUser) {
      setValues(currentUser);
      setIsInputValid(currentUser);
      setIsFormValid(true);
    }
  }, [currentUser, setValues, setIsInputValid, setIsFormValid]);

  function handleEditClick() {
    setOnEdit(true);
    setIsDisabled(false);
  }

  function handleSaveClick(e) {
    e.preventDefault();
    onUpdateUser({
      name: values.name,
      email: values.email,
    });
    setOnEdit(false);
    setIsDisabled(true);
  }

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className='profile'>
        <section className='profile__container'>
          <form
            id='profile'
            className='profile__form'
            name='profile-form'
            noValidate
          >
            <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
            <fieldset className='profile__inputs'>
              <span className='profile__input-title'>Имя</span>
              <label className='profile__input-container'>
                <span className='input-error'>{errors.name}</span>

                <input
                  disabled={isDisabled}
                  onChange={handleChange}
                  value={values.name || ''}
                  type='text'
                  name='name'
                  className={`profile__input ${
                    !isInputValid.name ? 'profile__input_error' : ''
                  }`}
                  placeholder='Введите имя'
                  minLength={2}
                  maxLength={30}
                  required
                />
              </label>
              <span className='profile__input-title'>E-mail</span>
              <label className='profile__input-container'>
                <input
                  disabled={isDisabled}
                  onChange={handleChange}
                  value={values.email || ''}
                  type='email'
                  name='email'
                  className={`profile__input ${
                    !isInputValid.email ? 'profile__input_error' : ''
                  }`}
                  placeholder='Введите email'
                  pattern={regexEmail}
                  required
                />
                <span className='input-error input-error_bottom'>
                  {errors.email}
                </span>
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
                <button
                  onClick={handleLogout}
                  className='profile__button profile__button_logout button'
                >
                  Выйти из аккаунта
                </button>
              </>
            )}
            {onEdit && (
              <>
                <span className='profile__error-message profile__error-message_hidden'>
                  При обновлении профиля произошла ошибка.
                </span>
                <button
                  disabled={!isFormValid}
                  form='profile'
                  onClick={handleSaveClick}
                  type='submit'
                  className={`profile__button profile__save-button button ${
                    !isFormValid ? 'profile__save-button_disabled' : ''
                  }`}
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
