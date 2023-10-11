import React from 'react';
import { useNavigate } from 'react-router';

import './NotFound.css';

function NotFound() {
  const navigate = useNavigate();
  return (
    <main className='not-found'>
      <div className='not-found__message'>
        <h1 className='not-found__title'>404</h1>
        <p className='not-found__text'>Страница не найдена</p>
      </div>
      <button type='button' className='not-found__button button' onClick={() => navigate(-1)}>
        Назад
      </button>
    </main>
  );
}

export default NotFound;
