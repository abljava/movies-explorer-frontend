import './FilterCheckbox.css';
import icon from '../../images/search-filter-icon.svg';

function FilterCheckbox() {
  return (
    <div className='checkbox'>
      <div className='checkbox__filter'>
        <label>
          <input type='checkbox' className='checkbox__toggler' />
          <span className='checkbox__toggler-slider'></span>
        </label>
      </div>
      <p className='checkbox__text'>Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
