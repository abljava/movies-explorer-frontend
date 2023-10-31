import React from 'react';
import { useLocation } from 'react-router-dom';
import getTimeFromMins from '../../utils/durationConverter';
import { moviesApiUrl } from '../../utils/config';
import './MoviesCard.css';

function MoviesCard({ movie, onSave, onDelete, savedMovies }) {
  const location = useLocation();
  const isSaved = savedMovies.some((item) => item.movieId === movie.id)
  const movieImgUrl = typeof movie.image === 'string'
      ? movie.image
      : `${moviesApiUrl}${movie.image.url}`;

  return (
    <li className='card'>
      <a href={movie.trailerLink} target='_blank' rel='noreferrer'>
        <img src={movieImgUrl} alt={movie.name} className='card__img' />
      </a>

      <div className='card__info'>
        <div className='card__description'>
          <h2 className='card__name'>{movie.nameRU}</h2>
          {location.pathname === '/movies' && (
            <button
              onClick={() => onSave(movie)}
              type='button'
              className={`card__button button ${isSaved ? 'card__button_active' : 'card__button_like'} `}
            ></button>
          )}
          {location.pathname === '/saved-movies' && (
            <button
              onClick={() => onDelete(movie._id)}
              type='button'
              className='card__button card__button_delete button'
            ></button>
          )}
        </div>
        <p className='card__duration'>{getTimeFromMins(movie.duration)}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
