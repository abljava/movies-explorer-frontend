import React from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import useResize from '../../utils/useResize';
import { moviesApiUrl } from '../../utils/config';
import './MoviesCardList.css';

function MoviesCardList({ movies }) {
  const window = useResize();
  const location = useLocation();

  return (
    <section>
      <ul className='cardlist'>
        {window.width >= 1280 &&
          movies.map((item) => {
            return <MoviesCard movie={item} key={item._id} />;
          })}
        {window.width <= 1279 &&
          window.width > 500 &&
          movies.slice(0, 8).map((item) => {
            return <MoviesCard movie={item} key={item._id} />;
          })}
        {window.width <= 499 &&
          location.pathname === '/movies' &&
          movies.slice(0, 5).map((item) => {
            return <MoviesCard movie={item} key={item._id} />;
          })}
        {window.width <= 499 &&
          location.pathname === '/saved-movies' &&
          movies.slice(0, 2).map((item) => {
            return <MoviesCard movie={item} key={item._id} />;
          })}
      </ul>
    </section>
  );
}

export default MoviesCardList;

// return (
//   <section>
//     <ul className='cardlist'>
//       {movies.map((item) => {
//         return <MoviesCard movie={item} key={item._id} />;
//       })}
//     </ul>
//   </section>
// );
