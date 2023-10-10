import './AboutMe.css';
import photo from '../../images/aboutme-photo.png';

function AboutMe() {
  return (
    <section className='about-me page__centered'>
      <h3 className='title'>Студент</h3>

      <div className='about-me__about'>
        <div className='about-me__description'>
          <div className='about-me__text'>
            <h2 className='about-me__heading'>Виталий</h2>
            <h3 className='about-me__subheading'>
              Фронтенд-разработчик, 30 лет
            </h3>
            <p className='about-me__paragraph'>
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У
              меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
              бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
              Контур». После того, как прошёл курс по веб&#8209;разработке,
              начал заниматься фриланс&#8209;заказами и ушёл с постоянной
              работы.
            </p>
          </div>
          <a
            href='https://github.com/abljava'
            target='_blank'
            rel='noreferrer'
            className='about-me__link'
          >
            Github
          </a>
        </div>
        <img className='about-me__photo' src={photo} alt='about-me' />
      </div>
    </section>
  );
}

export default AboutMe;
