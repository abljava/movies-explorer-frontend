import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { savedMovies } from '../../utils/savedMovies';

import './SavedMovies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies() {
  return (
    <>
      <div className='content'>
        <Header />
        <main className='saved page__centered page__centered_s'>
          <SearchForm />
          <MoviesCardList movies={savedMovies} />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default SavedMovies;
