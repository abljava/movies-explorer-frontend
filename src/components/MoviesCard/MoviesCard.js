import React from 'react';
import './MoviesCard.css';
import cardImage from '../../images/movies-card.png';

function MoviesCard() {
  return (
    <li className='card__item'>
      <img src={cardImage} alt='' className='card__img' />
      <div className='card__info'>
        <div className='card__description'>
          <h2 className='card__name'>33 слова о дизайне</h2>
          <button type='button' className='card__like-btn button' />
        </div>
        <p className='card__duration'>1ч42м</p>
      </div>
    </li>
  );
}

export default MoviesCard;
