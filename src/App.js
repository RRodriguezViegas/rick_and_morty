import styles from './styles/App.module.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import About from './components/About.jsx';
import Detail from './components/Detail';
import Error404 from './components/error404';
import { useState } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters(oldChars => [...oldChars, data]);
        } else {
          window.alert('¡No hay personajes con este ID!');
        }
      }
    );
  }

  const onClose = id => {
    setCharacters(characters.filter(char => char.id !== id));
  };

  return (
    <div className={styles.App}>
      <Nav onSearch={onSearch} />
      <Routes>
        <Route
          path='/home'
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:detailId' element={<Detail />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
