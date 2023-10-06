import './NavBurger.css';

function NavBurger({ onNavMobile }) {
  return (
    <div className='burger'>
      <button
        className='burger__button button'
        type='button'
        onClick={onNavMobile}
      ></button>
    </div>
  );
}

export default NavBurger;
