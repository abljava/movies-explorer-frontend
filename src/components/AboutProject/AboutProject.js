import './AboutProject.css';

function AboutProject() {
  return (
    <section className='about-project page__centered'>
      <h3 className='title'>О проекте</h3>
      <ul className='about-project__list'>
        <li className='about-project__item'>
          <h3 className='about-project__item-heading'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='about-project__item-text'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className='about-project__item'>
          <h3 className='about-project__item-heading'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='about-project__item-text'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className='about-project__table'>
        <p className='about-project__cell about-project__cell_green'>1 неделя</p>
        <p className='about-project__cell about-project__cell_grey'>4 недели</p>
        <p className='about-project__cell about-project__cell_white'>Back-end</p>
        <p className='about-project__cell about-project__cell_white'>Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
