import './InfoPopup.css'

const InfoPopup = ({ isSuccess, isOpen, onClose }) => {

  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container popup__tooltip">
        <button type="button" className="popup__close-button button" onClick={onClose}></button>
        <div className={isSuccess ? 'popup__tooltip_icon_success' : 'popup__tooltip_icon_fail'}></div>
        <h2 className="popup__title">{isSuccess ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'}</h2>
      </div>
    </div>
  )
}

export default InfoPopup