import React from 'react';
import { Link } from 'react-router-dom';
import './AccountButton.css';

function AccountButton() {
  return (
    <Link to='/profile' className='account-btn'>
      <div className='account-btn__container'>
        <p className='account-btn__text'>Аккаунт</p>
        <div className='account-btn__icon'></div>
      </div>
    </Link>
  );
}

export default AccountButton;