import './FilterCheckbox.css';

function FilterCheckbox({onCheckbox, isChecked}) {
  return (
    <div className='checkbox'>
      <div className='checkbox__filter'>
        <label>
          <input onChange={onCheckbox} type='checkbox' checked={isChecked} className='checkbox__toggler' />
          <span className='checkbox__toggler-slider'></span>
        </label>
      </div>
      <p className='checkbox__text'>Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
