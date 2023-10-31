import React from 'react';

import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({
  handleSubmit,
  handleInputChange,
  inputValue,
  isRequest,
  placeholder,
  onCheckbox,
  isChecked,
}) {
  return (
    <form className='search' onSubmit={handleSubmit} noValidate>
      <div className='search__form'>
        <label>
          <input
            onChange={handleInputChange}
            value={inputValue || ''}
            className='search__input'
            type='text'
            name='search'
            placeholder={placeholder}
            required
          />
        </label>
        <button type='submit' className='search__button button'>
          Найти
        </button>
      </div>

      <FilterCheckbox onCheckbox={onCheckbox} isChecked={isChecked} />
    </form>
  );
}

export default SearchForm;
