import React, { useState, useEffect } from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import './SavedMovies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies({ loggedIn, savedMovies, onDelete }) {
  // const [filteredMovies, setFliteredMovies] = useState(savedMovies);
  // const [inputValue, setInputValue] = useState('');
  // const [isChecked, setIsChecked] = useState(false);
  // const [placeholder, setPlaceholder] = useState('Фильм');
  // const [isQuery, setIsQuery] = useState(false);
  // const [isSearchResult, setIsSearchResult] = useState(true);


  // useEffect(() => {
  //   setFliteredSavedMovies(savedMovies)
  //   if(isSearchResult) {
  //     setFliteredSavedMovies(filteredSavedMovies)
  //   } else {
  //     setFliteredSavedMovies(savedMovies)
  //   }

  // }, [filteredSavedMovies, isSearchResult, savedMovies])

  // console.log('savedMovies', savedMovies);
  // console.log('filteredMovies', filteredMovies);

  // useEffect(() => {
  //   console.log('savedMovies', savedMovies);
  //   console.log('filteredSavedMovies', filteredSavedMovies);

  // }, [savedMovies, filteredSavedMovies])



  // const onFilter = (inputValue, isChecked, savedMovies) => {
  //   let searchResult = []; //переменная для сохрарения результата поиска
  //   if (inputValue) {
  //     searchResult = savedMovies.filter((item) => {
  //       const searchText =
  //         item.nameRU.toLowerCase().includes(inputValue.toLowerCase()) ||
  //         item.nameEN.toLowerCase().includes(inputValue.toLowerCase());
  //       return isChecked ? searchText && item.duration <= 40 : searchText;
  //     });
  //   }
  //   setFliteredMovies(searchResult);
  //   console.log(`searchResult :`, searchResult);
  //   searchResult.length === 0 ? setIsSearchResult(false) : setIsSearchResult(true);
  // };


  // function handleSubmit(e) {
  //   e.preventDefault();
  //   if (!isQuery) {
  //     setPlaceholder('Нужно ввести ключевое слово');
  //   } else {
  //     setIsChecked(isChecked);
  //     onFilter(inputValue, isChecked, savedMovies);
  //   }
  // }

  // function handleInputChange(e) {
  //   setInputValue(e.target.value);
  //   setPlaceholder('');
  //   !e.target.value ? setIsQuery(false) : setIsQuery(true);
  // }

  // function handleCheckboxClick() {
  //   !isChecked ? setIsChecked(true) : setIsChecked(false);
  //   onFilter(inputValue, !isChecked, savedMovies);
  // }

  return (
    <>
      <div className='content'>
        <Header loggedIn={loggedIn} />
        <main className='saved page__centered page__centered_s'>
          <SearchForm
            // handleSubmit={handleSubmit}
            // handleInputChange={handleInputChange}
            // onCheckbox={handleCheckboxClick}
            // inputValue={inputValue}
            // isChecked={isChecked}
            // placeholder={placeholder}
          />
          <MoviesCardList
          savedMovies={savedMovies}
          onDelete={onDelete} />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default SavedMovies;
