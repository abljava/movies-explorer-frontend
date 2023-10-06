import React from 'react';
import './MoviesCard.css';
// import cardImage from '../../images/movies-card.png';

function MoviesCard({ movie }) {
  return (
    <li className='card__item'>
      <img src={movie.link} alt={movie.name} className='card__img' />
      <div className='card__info'>
        <div className='card__description'>
          <h2 className='card__name'>{movie.name}</h2>
          <button type='button' className='card__like-btn button' />
        </div>
        <p className='card__duration'>{movie.duration}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
