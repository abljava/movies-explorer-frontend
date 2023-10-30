import { useState, useEffect } from 'react';

const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return width;
};

export default useResize;



  // количество отображаемых карточек для разных размеров экрана
  const showCardsLarge = 16;
  const showCardsMedium = 12;
  const showCardsSmall = 8;
  const showCardsXsmall = 5;

  //по сколько карточек добавлять на разных размерах экрана
  const addCardLarge = 4;
  const addCardMedium = 3;
  const addCardSmall = 2;
  const addCardXsmall = 2;

  //брейкпоинты для отрисовки разного количества карточек
  const windowLarge = window.innerWidth > 1280;
  const windowMedium = window.innerWidth <= 1279 && window.innerWidth > 929;
  const windowSmall = window.innerWidth <= 929 && window.innerWidth > 629;
  const windowXsmall = window.innerWidth <= 629;
