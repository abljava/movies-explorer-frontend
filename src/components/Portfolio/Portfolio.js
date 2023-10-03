import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio page__centered'>
      <h3 className='portfolio__heading'>Портфолио</h3>
      <nav className='portfolio__list'>
        <a
          href='site.com'
          target='_blank'
          className='portfolio__item portfolio__item_wide'
        >
          Статичный сайт
        </a>
        <a
          href='site.com'
          target='_blank'
          className='portfolio__item portfolio__item_narrow'
        >
          <img
            src=''
            alt=''
            className='portfolio__link'
          />
        </a>
        <a
          href='site.com'
          target='_blank'
          className='portfolio__item portfolio__item_wide'
        >
          Адаптивный сайт
        </a>
        <a
          href='site.com'
          target='_blank'
          className='portfolio__item portfolio__item_narrow'
        ></a>
        <a
          href='site.com'
          target='_blank'
          className='portfolio__item portfolio__item_wide'
        >
          Одностраничное приложение
        </a>
        <a
          href='site.com'
          target='_blank'
          className='portfolio__item portfolio__item_narrow'
        ></a>
      </nav>
    </section>
  );
}

export default Portfolio;
