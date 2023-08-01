import styles from './App.module.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import characters, { Rick } from './data.js';

function App() {
  return (
    <div className={styles.App}>
      <SearchBar
        className='Searchbar'
        onSearch={characterID => window.alert(characterID)}
      />
      <Cards characters={characters} />
    </div>
  );
}

export default App;
