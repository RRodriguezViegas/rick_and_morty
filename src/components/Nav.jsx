import React from 'react';
import SearchBar from './SearchBar';
import styles from '../styles/Nav.module.css';

export default function Nav({ onSearch }) {
  return (
    <div className={styles.navBar}>
      <SearchBar onSearch={onSearch} />;
    </div>
  );
}
