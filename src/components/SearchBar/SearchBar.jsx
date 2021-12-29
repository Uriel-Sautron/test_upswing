import React, { useEffect, useState } from 'react';
import styles from './SearchBar.module.scss';

export const SearchBar = ({ handleChange }) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    handleChange(inputValue);
  }, [handleChange, inputValue]);

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Entrer un joueur"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};
