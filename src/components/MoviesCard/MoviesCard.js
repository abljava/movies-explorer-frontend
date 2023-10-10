import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';
import cardButton from '../../images/card-button.svg';
import cardButtonLike from '../../images/card-button-like.svg';
import cardButtonDelete from '../../images/card-button-delete.svg';

function MoviesCard({ movie }) {
  const location = useLocation();

  return (
    <li className='card'>
      <img src={movie.link} alt={movie.name} className='card__img' />
      <div className='card__info'>
        <div className='card__description'>
          <h2 className='card__name'>{movie.name}</h2>
          {location.pathname === '/movies' && (
            <button type='button' className='card__button-container button'>
              <img
                src={cardButton}
                alt='card button'
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
                alt='card button'
                className='card__button'
              />
            </button>
          )}
        </div>
        <p className='card__duration'>{movie.duration}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
