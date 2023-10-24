import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import './SavedMovies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies({loggedIn, savedMovies}) {
  return (
    <>
      <div className='content'>
        <Header loggedIn={loggedIn}/>
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
