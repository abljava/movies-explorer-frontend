import './Promo.css';

function Promo() {
  return (
    <section className='promo page__centered'>
      <div className='promo__text'>
        <h1 className='promo__header'>
          Учебный проект студента факультета<br />Веб&#8209;разработки.
        </h1>
        <p className="promo__description">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <button className="button promo__button">Узнать больше</button>
      </div>
      <div className="promo__image"></div>
    </section>
  );
}

export default Promo;
