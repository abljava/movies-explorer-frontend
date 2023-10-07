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
      <Header />
      <section className={`movies page__centered ${location.path === '/' ? '' : 'page__centered_s'}`}>
        <SearchForm />
        <MoviesCardList movies={movies}/>
        <div className='movies__more'>
          <button className='movies__more-btn button'>Ещё</button>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Movies;
