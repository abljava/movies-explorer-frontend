import React from 'react';
// import { Link } from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll';

import './Promo.css';

function Promo() {
  return (
    <section className='promo page__centered'>
      <div className='promo__text'>
        <h1 className='promo__header'>
          Учебный проект студента факультета Веб&#8209;разработки.
        </h1>
        <p className='promo__description'>
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <Link
          to='about-project'
          activeClass='active'
          spy={true}
          smooth={true}
          offset={30}
          duration={500}
          className='button promo__button'
        >
          Узнать больше
        </Link>
      </div>
      <div className='promo__image'></div>
    </section>
  );
}

export default Promo;
