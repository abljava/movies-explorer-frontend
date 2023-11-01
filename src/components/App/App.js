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
import * as authApi from '../../utils/authApi';

function App() {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(!!localStorage.token); //приводим к булевому типу
  const [isError, setIsError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);

  const tokenCheck = () => {
    if (localStorage.token) {
      mainApi
        .getUserInfo(localStorage.token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
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
      Promise.all([
        mainApi.getUserInfo(localStorage.token),
        mainApi.getSavedMovies(localStorage.token),
      ])
        .then(([userData, userMovies]) => {
          setCurrentUser(userData);
          setSavedMovies(userMovies);
        })
        .catch((err) => {
          console.log(`Ошибка получения данных пользователя: `, err);
        });
    }
  }, [loggedIn]);

  function handleLogin(email, password) {
    authApi
      .login(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          setLoggedIn(true);
          navigate('/movies', { replace: true });
        }
      })
      .catch((err) => {
        setIsError(`Ошибка авторизации ${err}`);
        console.log(`Ошибка авторизации: `, err);
      });
  }

  function handleRegistration(values) {
    authApi
      .register(values.name, values.email, values.password)
      .then((res) => {
        handleLogin(values.email, values.password);
      })
      .catch((err) => {
        setIsError(`Ошибка регистрации ${err}`);
        console.log(`Ошибка регистрации: `, err);
      });
  }

  function handleLogout() {
    localStorage.clear();
    setLoggedIn(false);
    navigate('/', { replace: true });
  }

  function handleUpdateUser(data) {
    mainApi
      .editUserInfo(data, localStorage.token)
      .then((data) => {
        setCurrentUser(data);
        setIsSuccess(true);
      })
      .catch((err) => {
        setIsSuccess(false);
        setIsError(`Ошибка при редактировании профиля ${err}`);
        console.log(`Ошибка при редактировании профиля: ${err}`);
      });
  }

  function handleSaveClick(savedMovie) {
    const isSaved = savedMovies.find((item) => item.movieId === savedMovie.id);
    // console.log(`isSaved :`, isSaved);
    // console.log(`savedMovie :`, savedMovie);

    if (isSaved) {
      handleDeleteClick(isSaved._id, localStorage.token);
    } else {
      mainApi
        .saveMovie(savedMovie, localStorage.token)
        .then((newMovie) => {
          setSavedMovies((movies) => [newMovie, ...movies]);
        })
        .catch((err) => {
          console.log(`Ошибка сохранения фильма :`, err);
        });
    }
  }

  function handleDeleteClick(movieId) {
    mainApi.deleteMovie(movieId, localStorage.token).then(() => {
      setSavedMovies((movies) =>
        movies.filter((movie) => movie._id !== movieId)
      );
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
                    savedMovies={savedMovies}
                    onSave={handleSaveClick}
                  />
                }
              ></Route>
              <Route
                path='/saved-movies'
                element={
                  <ProtectedRoute
                    element={SavedMovies}
                    loggedIn={loggedIn}
                    savedMovies={savedMovies}
                    onDelete={handleDeleteClick}
                  />
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
                    isSuccess={isSuccess}
                    setIsSuccess={setIsSuccess}
                    isError={isError}
                    setIsError={setIsError}
                  />
                }
              ></Route>
              <Route
                path='/signin'
                element={
                  <Login
                    handleLogin={handleLogin}
                    isError={isError}
                    setIsError={setIsError}
                  />
                }
              ></Route>
              <Route
                path='/signup'
                element={
                  <Register
                    handleRegistration={handleRegistration}
                    isError={isError}
                    setIsError={setIsError}
                  />
                }
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
