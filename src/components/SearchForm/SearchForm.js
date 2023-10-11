import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <form className='search'>
      <div className='search__form'>
        <label>
          <input
            className='search__input'
            type='text'
            name='search'
            placeholder='Фильм'
          />
        </label>
        <button type='submit' className='search__button button'>Найти</button>
      </div>
      <FilterCheckbox />
    </form>
  );
}

export default SearchForm;
