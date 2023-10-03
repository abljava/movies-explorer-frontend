import './AboutProject.css';

function AboutProject() {
  return (
    <section className='about-project page__centered'>
      <h3 className='title'>О проекте</h3>
      <ul className='table'>
        <li className='table__cell'>
          <p className='table__cell-heading'>
            Дипломный проект включал 5 этапов
          </p>
          <p className='table__cell-text'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className='table__cell'>
          <p className='table__cell-heading'>
            На выполнение диплома ушло 5 недель
          </p>
          <p className='table__cell-text'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className='timetable'>
        <p className='timetable__cell timetable__cell_green'>1 неделя</p>
        <p className='timetable__cell timetable__cell_grey'>4 недели</p>
        <p className='timetable__cell timetable__cell_white'>Back-end</p>
        <p className='timetable__cell timetable__cell_white'>Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
