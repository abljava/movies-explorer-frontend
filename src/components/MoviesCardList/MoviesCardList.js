import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import useResize from '../../utils/useResize';
import './MoviesCardList.css';
import {
  showCardsLarge,
  showCardsMedium,
  showCardsSmall,
  showCardsXsmall,
  addCardLarge,
  addCardMedium,
  addCardSmall,
} from '../../utils/config';

function MoviesCardList({
  movies,
  savedMovies,
  isLoading,
  onSave,
  onDelete,
  isSearchResult,
}) {
  const { windowLarge, windowMedium, windowSmall, windowXsmall } = useResize();
  const location = useLocation();
  const [counter, setCounter] = useState(''); //counter - число карточек для отрисовки

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
        if (windowLarge) {
          setCounter(countCards().toShow);
        }
        if (windowMedium) {
          setCounter(countCards().toShow);
        }
        if (windowSmall) {
          setCounter(countCards().toShow);
        }
        if (windowXsmall) {
          setCounter(countCards().toShow);
        }
      }
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [
    countCards,
    location,
    windowLarge,
    windowMedium,
    windowSmall,
    windowXsmall,
  ]);

  function loadMoreCards() {
    setCounter(counter + countCards().toAdd);
  }

  return (
    <section>
      {isLoading ? (
        <Preloader />
      ) : location.pathname === '/movies' && isSearchResult ? (
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
