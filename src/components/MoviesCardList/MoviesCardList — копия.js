import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import './MoviesCardList.css';

function MoviesCardList({ movies, isLoading, onLike }) {
  const location = useLocation();
  const [counter, setCounter] = useState('');

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

  const desktop = 1280;
  const tablet = 1024;
  const mobile = 650;

  //считаем, сколько карточек показывать и добавлять
  const countCards = useCallback(() => {
    const cardsNumber = {};
    if (windowLarge) {
      cardsNumber.toShow = showCardsLarge;
      cardsNumber.toAdd = addCardLarge;
    }
    if (windowMedium) {
      cardsNumber.toShow = showCardsMedium;
      cardsNumber.toAdd = addCardMedium;
    }
    if (windowSmall) {
      cardsNumber.toShow = showCardsSmall;
      cardsNumber.toAdd = addCardSmall;
    }
    if (windowXsmall) {
      cardsNumber.toShow = showCardsXsmall;
      cardsNumber.toAdd = addCardXsmall;
    }
    return cardsNumber;
  }, [windowLarge, windowMedium, windowSmall, windowXsmall]);

  //устанавливаем кол-во карточек в зависимости от размера экрана
  useEffect(() => {
    if (location.pathname === '/movies') {
      setCounter(countCards().toShow);
      function handleResize() {
        if (window.innerWidth >= desktop) {
          setCounter(countCards().toShow);
        }
        if (window.innerWidth < desktop) {
          setCounter(countCards().toShow);
        }
        if (window.innerWidth < tablet) {
          setCounter(countCards().toShow);
        }
        if (window.innerWidth < mobile) {
          setCounter(countCards().toShow);
        }
      }
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [countCards, location.pathname, desktop, tablet, mobile]);

  function loadMoreCards() {
    setCounter(counter + countCards().toAdd);
  }

  return (
    <section>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <ul className='cardlist'>
            {movies.slice(0, counter).map((item) => {
              return <MoviesCard movie={item} key={item.id} onLike={onLike} />;
            })}
          </ul>
          <div className='cardlist__more'>
            {location.pathname === '/movies' && counter < movies.length && (
              <button
                onClick={loadMoreCards}
                type='button'
                className='cardlist__more-btn button'
              >
                Ещё
              </button>
            )}
          </div>
        </>
      )}
    </section>
  );
}

export default MoviesCardList;

// return (
//   <section>
//     <ul className='cardlist'>
//       {movies.map((item) => { return <MoviesCard movie={item} key={item._id} />})}
//     </ul>
//   </section>
// );
