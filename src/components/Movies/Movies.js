import React from 'react';
import { useLocation } from 'react-router-dom';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { movies } from '../../utils/movies';

function Movies() {
  const location = useLocation();

  return (
    <>
      <div className='content'>
        <Header />
        <main
          className={`movies page__centered ${
            location.pathname === '/' ? '' : 'page__centered_s'
          }`}
        >
          <SearchForm />
          <MoviesCardList movies={movies} />
          <div className='movies__more'>
            <button type='button' className='movies__more-btn button'>
              Ещё
            </button>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Movies;
