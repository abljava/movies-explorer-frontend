export const REGEX_EMAIL = '^\\S+@\\S+\\.\\S+$';
export const MOVIES_API = 'https://api.nomoreparties.co';
export const BASE_URL = 'http://coffee-api.lialiushkina.ru';

export const shortMovieDuration = 40;

// количество отображаемых карточек для разных размеров экрана
export const showCardsLarge = 16;
export const showCardsMedium = 12;
export const showCardsSmall = 8;
export const showCardsXsmall = 5;

//по сколько карточек добавлять на разных размерах экрана
export const addCardLarge = 4;
export const addCardMedium = 3;
export const addCardSmall = 2;

//брейкпоинты для отрисовки разного количества карточек
export const windowLarge = window.innerWidth > 1280;
export const windowMedium =
  window.innerWidth <= 1279 && window.innerWidth > 929;
export const windowSmall = window.innerWidth <= 929 && window.innerWidth > 629;
export const windowXsmall = window.innerWidth <= 629;
