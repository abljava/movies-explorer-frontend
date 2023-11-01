import React from 'react';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import './Main.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Main({ loggedIn }) {
  return (
    <>
      <div className='content'>
        <Header loggedIn={loggedIn} />
        <main className='main'>
          <Promo />
          <AboutProject id='about-project' />
          <Techs />
          <AboutMe />
          <Portfolio />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Main;
