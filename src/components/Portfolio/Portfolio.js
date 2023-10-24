import './Portfolio.css';
import portfolioIcon from '../../images/portfolio_icon.svg';

function Portfolio() {
  return (
    <section className='portfolio page__centered'>
      <h2 className='portfolio__heading'>Портфолио</h2>
      <nav className='portfolio__list'>
        <a
          href='https://github.com/abljava/how-to-learn.git'
          target='_blank'
          rel='noreferrer'
          className='portfolio__item portfolio__item_wide link'
        >
          Статичный сайт
        </a>
        <a
          href='https://github.com/abljava/how-to-learn.git'
          target='_blank'
          rel='noreferrer'
          className='portfolio__item portfolio__item_narrow link'
        >
          <img
            src={portfolioIcon}
            alt='иконка для ссылки'
            className='portfolio__icon'
          />
        </a>
        <a
          href='https://github.com/abljava/russian-travel.git'
          target='_blank'
          rel='noreferrer'
          className='portfolio__item portfolio__item_wide link'
        >
          Адаптивный сайт
        </a>
        <a
          href='https://github.com/abljava/russian-travel.git'
          target='_blank'
          rel='noreferrer'
          className='portfolio__item portfolio__item_narrow link'
        >
          {' '}
          <img
            src={portfolioIcon}
            alt='иконка для ссылки'
            className='portfolio__icon'
          />
        </a>
        <a
          href='https://github.com/abljava/react-mesto-api-full-gha.git'
          target='_blank'
          rel='noreferrer'
          className='portfolio__item portfolio__item_wide link'
        >
          Одностраничное приложение
        </a>
        <a
          href='https://github.com/abljava/react-mesto-api-full-gha.git'
          target='_blank'
          rel='noreferrer'
          className='portfolio__item portfolio__item_narrow link'
        >
          {' '}
          <img
            src={portfolioIcon}
            alt='иконка для ссылки'
            className='portfolio__icon'
          />
        </a>
      </nav>
    </section>
  );
}

export default Portfolio;
