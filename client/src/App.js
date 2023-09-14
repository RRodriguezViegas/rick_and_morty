import styles from './styles/App.module.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import About from './components/About.jsx';
import Detail from './components/Detail';
import Favorites from './components/Favorites';
import Form from './components/Form';
import Error404 from './components/error404';
import { useState } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  let EMAIL = 'ramiirv26@gmail.com';
  let PASSWORD = 'hola1234';
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  const login = userData => {
    if (userData.email === EMAIL && userData.password === PASSWORD) {
      setAccess(true);
      navigate('/home');
    }
  };

  function onSearch(id) {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacters(oldChars => [...oldChars, data]);
        } else {
          window.alert('¡No hay personajes con este ID!');
        }
      })
      .catch(reason => console.log(reason));
  }

  const onClose = id => {
    setCharacters(characters.filter(char => char.id !== id));
  };

  return (
    <div className={styles.App}>
      {location.pathname !== '/' ? <Nav onSearch={onSearch} /> : ''}
      <Routes>
        <Route
          path='/home'
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:detailId' element={<Detail />} />
        <Route path='/' element={<Form login={login} />} />
        <Route path='*' element={<Error404 />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
