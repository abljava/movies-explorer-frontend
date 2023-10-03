import './AboutMe.css';

function AboutMe() {
  return (
    <section className='about-me page__centered'>
      <h3 className='title'>Студент</h3>

      <div className='about-me__about'>
        <div className='about-me__description'>
          <div className='about-me__text'>
            <h1 className='about-me__heading'>Виталий</h1>
            <h3 className='about-me__subheading'>
              Фронтенд-разработчик, 30 лет
            </h3>
            <p className='about-me__paragraph'>
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У
              меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
              бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
              Контур». После того, как прошёл курс по веб&#8209;разработке,
              начал заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
          </div>
          <a href='github.com' target='_blank' className='about-me__link'>
            Github
          </a>
        </div>
        <div className='about-me__photo'></div>
      </div>
    </section>
  );
}

export default AboutMe;
