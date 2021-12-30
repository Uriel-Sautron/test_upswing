import React, { useEffect, useState } from 'react';
import styles from './SearchBar.module.scss';

export const SearchBar = ({ handleSearch }) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    handleSearch(inputValue);
  }, [handleSearch, inputValue]);

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Rechercher un joueur"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};
