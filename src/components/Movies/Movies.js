import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { moviesApi } from '../../utils/moviesApi';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Movies.css';

function Movies({ loggedIn, savedMovies, onSave }) {
  const location = useLocation();

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isQuery, setIsQuery] = useState(false);
  const [placeholder, setPlaceholder] = useState('Фильм');
  const [filteredMovies, setFliteredMovies] = useState([]);
  const [isSearchResult, setIsSearchResult] = useState(true);
  const [isError, setIsError] = useState('');

  //получаем значения предыдущего поиска из localStorage
  useEffect(() => {
    const SavedIputValue = JSON.parse(localStorage.getItem('inputValue'));
    const SavedCheckboxState = JSON.parse(localStorage.getItem('isChecked'));
    const SavedFilteredMovies = JSON.parse(
      localStorage.getItem('filteredMovies')
    );
    if ({ SavedIputValue, SavedCheckboxState, SavedFilteredMovies }) {
      setInputValue(SavedIputValue || '');
      setIsChecked(SavedCheckboxState || false);
      setFliteredMovies(SavedFilteredMovies || []);
      setIsError('');
    }
  }, []);

  //получаем массив всех фильмов от beatfilms и фильтруем
  const onSearch = (inputValue, isChecked, movies) => {
    if (movies.length === 0) {
      setIsLoading(true);
      moviesApi
        .getMovies()
        .then((movies) => {
          setMovies(movies);
          setIsLoading(false);
          onFilter(inputValue, isChecked, movies);
        })
        .catch((err) => {
          setIsError(
            'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
          );
          console.log(`Ошибка получения фильмов: `, err);
        })
        .finally(() => setIsLoading(false));
    } else {
      onFilter(inputValue, isChecked, movies);
    }
  };

  //функция фильтрации фильмов
  const onFilter = (inputValue, isChecked, movies) => {
    localStorage.setItem('inputValue', JSON.stringify(inputValue));
    localStorage.setItem('isChecked', JSON.stringify(isChecked));
    localStorage.setItem('movies', JSON.stringify(movies));

    let searchResult = []; //переменная для сохрарения результата поиска
    if (inputValue) {
      searchResult = movies.filter((item) => {
        const searchText =
          item.nameRU.toLowerCase().includes(inputValue.toLowerCase()) ||
          item.nameEN.toLowerCase().includes(inputValue.toLowerCase());
        return isChecked ? searchText && item.duration <= 40 : searchText;
      });
    }
    setFliteredMovies(searchResult);
    localStorage.setItem('filteredMovies', JSON.stringify(searchResult));
    // searchResult.length === 0 ? setIsSearchResult(false) : setIsSearchResult(true);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (!isQuery) {
      setPlaceholder('Нужно ввести ключевое слово');
    } else {
      setIsChecked(isChecked);
      onSearch(inputValue, isChecked, movies);
    }
  }

  function handleInputChange(e) {
    setInputValue(e.target.value);
    setPlaceholder('');
    !e.target.value ? setIsQuery(false) : setIsQuery(true);
  }

  function handleCheckboxClick() {
    !isChecked ? setIsChecked(true) : setIsChecked(false);
    onSearch(inputValue, !isChecked, movies);
  }

  return (
    <>
      <div className='content'>
        <Header loggedIn={loggedIn} />
        <main
          className={`movies page__centered ${
            location.pathname === '/' ? '' : 'page__centered_s'
          }`}
        >
          <SearchForm
            handleSubmit={handleSubmit}
            handleInputChange={handleInputChange}
            inputValue={inputValue}
            onCheckbox={handleCheckboxClick}
            isChecked={isChecked}
            isRequest={isQuery}
            placeholder={placeholder}
          />
          {isError && <div className='movies__not-found '>error</div>}
          <MoviesCardList
            movies={filteredMovies}
            savedMovies={savedMovies}
            isLoading={isLoading}
            onSave={onSave}
          />
          {/* {filteredMovies.length === 0
            ? <div className='movies__not-found '>Ничего не найдено</div>
            : <MoviesCardList movies={filteredMovies} isLoading={isLoading} />
          } */}
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Movies;
