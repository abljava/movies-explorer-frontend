import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';

import CurrentUserContext from '../../contexts/CurrentUserContext';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import Movies from '../Movies/Movies';
import NotFound from '../NotFound/NotFound';
import { mainApi } from '../../utils/mainApi';
import { moviesApi } from '../../utils/moviesApi';

function App() {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false); //preloader
  const [movies, setMovies] = useState([]);
  const [serverErr, setServerErr] = useState('')

  const tokenCheck = () => {
    if (localStorage.token) {
      mainApi
        .getUserInfo(localStorage.token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            navigate('/', { replace: true });
          }
        })
        .catch((err) => {
          console.log(`Ошибка проверки токена: `, err);
        });
    }
  };

  useEffect(() => {
    tokenCheck();
  }, []);

  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getUserInfo(localStorage.token)
        .then((userData) => {
          setCurrentUser(userData);
          // console.log(currentUser);
        })
        .catch((err) => {
          console.log(`Ошибка получения данных пользователя: `, err);
        });
    }
  }, [loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      moviesApi
        .getMovies(localStorage.token)
        .then((movies) => {
          setMovies(movies);
        })
        .catch((err) => {
          console.log(`Ошибка получения фильмов: `, err);
        });
    }
  }, [loggedIn]);

  function handleRegistration() {
    setIsSuccess(true);
  }

  function handleLogin() {
    setLoggedIn(true);
  }

  function handleLogout() {
    localStorage.clear();
    setLoggedIn(false);
    navigate('/', { replace: true });
  }

  function handleUpdateUser(data) {
    mainApi.editUserInfo(data, localStorage.token).then((data) => {
      setCurrentUser(data);
    });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='App'>
        <div className='page'>
          <div className='page__container'>
            <Routes>
              <Route path='/' element={<Main loggedIn={loggedIn} />}></Route>
              <Route
                path='/movies'
                element={
                  <ProtectedRoute
                    element={Movies}
                    loggedIn={loggedIn}
                    movies={movies}
                  />
                }
              ></Route>
              <Route
                path='/saved-movies'
                element={
                  <ProtectedRoute element={SavedMovies} loggedIn={loggedIn} />
                }
              ></Route>
              <Route
                path='/profile'
                element={
                  <ProtectedRoute
                    element={Profile}
                    loggedIn={loggedIn}
                    handleLogout={handleLogout}
                    onUpdateUser={handleUpdateUser}
                  />
                }
              ></Route>
              <Route
                path='/signin'
                element={<Login handleLogin={handleLogin} />}
              ></Route>
              <Route
                path='/signup'
                element={<Register handleRegistration={handleRegistration} />}
              ></Route>
              <Route path='*' element={<NotFound />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
