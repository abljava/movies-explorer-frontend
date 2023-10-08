import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ movies }) {
  
return (
  <ul className='cardlist'>
    {movies.map((item) => {
      return <MoviesCard movie={item} key={item._id} />;
    })}
  </ul>
);
}

export default MoviesCardList;


