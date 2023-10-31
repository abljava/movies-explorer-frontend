import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import useResize from '../../utils/useResize';
import {
  showCardsLarge,
  showCardsMedium,
  showCardsSmall,
  showCardsXsmall,
  addCardLarge,
  addCardMedium,
  addCardSmall,
} from '../../utils/config';
import './MoviesCardList.css';

function MoviesCardList({
  movies,
  savedMovies,
  isLoading,
  onSave,
  onDelete,
  isSearchResult,
}) {
  const location = useLocation();
  const [counter, setCounter] = useState(''); //counter - число карточек для отрисовки
  const screenSize = useResize();

  //брейкпоинты для отрисовки разного количества карточек
  const windowLarge = window.innerWidth > 1280;
  const windowMedium = window.innerWidth <= 1279 && window.innerWidth > 929;
  const windowSmall = window.innerWidth <= 929 && window.innerWidth > 629;
  const windowXsmall = window.innerWidth <= 629;

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
      cardsNumber.toAdd = addCardSmall;
    }
    return cardsNumber;
  }, [windowLarge, windowMedium, windowSmall, windowXsmall]);

  //устанавливаем кол-во карточек в зависимости от размера экрана
  useEffect(() => {
    if (location.pathname === '/movies') {
      setCounter(countCards().toShow);
      function handleResize() {
        if (window.innerWidth > 1280) {
          setCounter(countCards().toShow);
        }
        if (window.innerWidth <= 1279 && window.innerWidth > 929) {
          setCounter(countCards().toShow);
        }
        if (window.innerWidth <= 929 && window.innerWidth > 629) {
          setCounter(countCards().toShow);
        }
        if (window.innerWidth <= 629) {
          setCounter(countCards().toShow);
        }
      }
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [countCards, location.pathname]);

  function loadMoreCards() {
    setCounter(counter + countCards().toAdd);
  }

  return (
    <section>
      {isLoading ? (
        <Preloader />
      ) : location.pathname === '/movies' && isSearchResult ? (
        <>
          <ul className='cardlist'>
            {movies.slice(0, counter).map((item) => {
              return (
                <MoviesCard
                  movie={item}
                  key={item.id}
                  onSave={onSave}
                  savedMovies={savedMovies}
                />
              );
            })}
          </ul>
        </>
      ) : isSearchResult ? (
        <ul className='cardlist'>
          {savedMovies.map((item) => {
            return (
              <MoviesCard
                movie={item}
                key={item._id}
                onDelete={onDelete}
                savedMovies={savedMovies}
              />
            );
          })}
        </ul>
      ) : (
        <span className='cardlist__not-found'>Ничего не найдено</span>
      )}
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
