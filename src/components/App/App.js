import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import Movies from '../Movies/Movies';
import NotFound from '../NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <div className="page">
        <div className="page__container">
          <Routes>
            <Route path='/' element={<Main />}></Route>
            <Route path='/movies' element={<Movies />}></Route>
            <Route path='/saved-movies' element={<SavedMovies />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
            <Route path='/signin' element={<Login />}></Route>
            <Route path='/signup' element={<Register />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;