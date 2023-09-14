import React from 'react';
import SearchBar from './SearchBar';
import styles from '../styles/Nav.module.css';
import { Link } from 'react-router-dom';

export default function Nav({ onSearch }) {
  return (
    <div className={styles.navBar}>
      <Link to={'/home'}>
        <button>Home</button>
      </Link>
      <Link to={'/about'}>
        <button>About</button>
      </Link>
      <Link to={'/favorites'}>
        <button>Favorites</button>
      </Link>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}
