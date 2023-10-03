import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Movies() {
  return (
    <>
      <Header />
      <section className='movies page__centered'>
        <SearchForm />
        <MoviesCardList />
        <div className='movies__more'>
          <button className='movies__more-btn button'>Ещё</button>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Movies;
