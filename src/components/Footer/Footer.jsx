import React from 'react';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <p>
        Made with
        <span>&hearts;</span>
        <b>Uriel SAUTRON © 2022</b>
      </p>
    </footer>
  );
};
