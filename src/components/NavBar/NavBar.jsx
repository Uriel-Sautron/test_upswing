import React from 'react';

import { SearchBar, FormModal } from '..';
import styles from './NavBar.module.scss';

export const NavBar = ({ handleSearch }) => {
  return (
    <nav className={styles.navBarContainer}>
      <SearchBar handleSearch={handleSearch} />
      <div>
        <FormModal />
      </div>
    </nav>
  );
};
