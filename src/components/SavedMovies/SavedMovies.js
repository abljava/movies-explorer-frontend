import React, { useState, useEffect } from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import './SavedMovies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { shortMovieDuration } from '../../utils/config';

function SavedMovies({ loggedIn, savedMovies, onDelete }) {
  const [filteredMovies, setFliteredMovies] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [placeholder, setPlaceholder] = useState('Фильм');
  const [isQuery, setIsQuery] = useState(false);
  const [isSearchResult, setIsSearchResult] = useState(true);

  useEffect(() => {
    setFliteredMovies(savedMovies);
  }, [savedMovies]);

  const onFilter = (inputValue, isChecked, savedMovies) => {
    let searchResult = savedMovies; //переменная для сохрарения результата поиска

    searchResult = savedMovies.filter((item) => {
      const searchText =
        item.nameRU.toLowerCase().includes(inputValue.toLowerCase()) ||
        item.nameEN.toLowerCase().includes(inputValue.toLowerCase());
      return isChecked
        ? searchText && item.duration <= shortMovieDuration
        : searchText;
    });

    setFliteredMovies(searchResult);
    searchResult.length > 0
      ? setIsSearchResult(true)
      : setIsSearchResult(false);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (!isQuery) {
      setPlaceholder('Нужно ввести ключевое слово');
    } else {
      setIsChecked(isChecked);
      onFilter(inputValue, isChecked, savedMovies);
    }
  }

  function handleInputChange(e) {
    setInputValue(e.target.value);
    setPlaceholder('');
    !e.target.value ? setIsQuery(false) : setIsQuery(true);
  }

  function handleCheckboxClick() {
    !isChecked ? setIsChecked(true) : setIsChecked(false);
    onFilter(inputValue, !isChecked, savedMovies);
  }

  return (
    <>
      <div className='content'>
        <Header loggedIn={loggedIn} />
        <main className='saved page__centered page__centered_s'>
          <SearchForm
            handleSubmit={handleSubmit}
            handleInputChange={handleInputChange}
            onCheckbox={handleCheckboxClick}
            inputValue={inputValue}
            isChecked={isChecked}
            placeholder={placeholder}
          />
          <MoviesCardList
            savedMovies={filteredMovies}
            onDelete={onDelete}
            isSearchResult={isSearchResult}
          />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default SavedMovies;
