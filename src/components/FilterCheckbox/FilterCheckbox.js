import './FilterCheckbox.css';
import icon from '../../images/search-filter-icon.svg'


function FilterCheckbox() {
  return (
    <div className='checkbox'>
      <img src={icon} alt='checkbox-icon' className='checkbox__icon' />
      <p className='checkbox__text'>Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;

