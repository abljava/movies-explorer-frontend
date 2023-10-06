import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ movies }) {
  return (
    <ul className='cardlist'>
      {movies.map((item) => {
        return <MoviesCard movie={item} />;
      })}
    </ul>
  );
}

export default MoviesCardList;
