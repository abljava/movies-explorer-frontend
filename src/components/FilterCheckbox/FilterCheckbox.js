import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <section className='checkbox'>
      <div className='checkbox__filter'>
        <label>
          <input type='checkbox' className='checkbox__toggler' />
          <span className='checkbox__toggler-slider'></span>
        </label>
      </div>
      <p className='checkbox__text'>Короткометражки</p>
    </section>
  );
}

export default FilterCheckbox;
