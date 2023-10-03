import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import './SavedMovies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies() {
  return (
    <>
      <Header />
      <section className='saved page__centered'>
        <SearchForm />
        <MoviesCardList />
      </section>
      <Footer />
    </>
  );
}

export default SavedMovies;
