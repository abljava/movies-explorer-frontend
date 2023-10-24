import React from 'react';
import { useLocation } from 'react-router-dom';
import getTimeFromMins from '../../utils/durationConverter';
import { moviesApiUrl } from '../../utils/config';

import './MoviesCard.css';
import cardButton from '../../images/card-button.svg';
import cardButtonLike from '../../images/card-button-like.svg';
import cardButtonDelete from '../../images/card-button-delete.svg';

function MoviesCard({ movie }) {
  const location = useLocation();
  const movieImgUrl = `${moviesApiUrl}${movie.image.url}`


  return (
    <li className='card'>
      <a href={movie.trailerLink} target="_blank" rel="noreferrer">
      <img src={movieImgUrl} alt={movie.name} className='card__img' />
      </a>

      <div className='card__info'>
        <div className='card__description'>
          <h2 className='card__name'>{movie.nameRU}</h2>
          {location.pathname === '/movies' && (
            <button type='button' className='card__button-container button'>
              <img
                src={cardButton}
                alt='кнопка лайка карточки'
                className='card__button'
              />
            </button>
          )}
          {location.pathname === '/saved-movies' && (
            <button
              type='button'
              className='card__button-container card__button-container_hidden button'
            >
              <img
                src={cardButtonDelete}
                alt='кнопка удаления карточки'
                className='card__button'
              />
            </button>
          )}
        </div>
        <p className='card__duration'>{getTimeFromMins(movie.duration)}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
