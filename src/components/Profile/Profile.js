import Header from '../Header/Header';
import './Profile.css';

function Profile() {
  return (
    <>
      <Header />
      <main className='profile'>
        <div className="profile__container">
        <form className='profile__form' name='profile-form'>
          <h2 className='profile__title'>Привет, Виталий!</h2>
          <fieldset className='profile__inputs'>
            <div className='profile__input-title'>Имя</div>
            <label className='profile__input-container'>
              <input
                type='text'
                className='profile__input'
                placeholder='Виталий'
              />
            </label>
            <div className='profile__input-title'>E-mail</div>
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
          <button
            type='submit'
            className='profile__button profile__button_submit button'
          >
            Редактировать
          </button>
          <button className='profile__button profile__button_logout button'>
            Выйти из аккаунта
          </button>
        </div>
        </div>

      </main>
    </>
  );
}

export default Profile;
