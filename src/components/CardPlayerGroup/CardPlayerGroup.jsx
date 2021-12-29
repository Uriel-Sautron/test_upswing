import React, { useState } from 'react';
import { CardPlayer } from '../CardPlayer/CardPlayer';
import styles from './CardPlayerGroup.module.scss';

export const CardPlayerGroup = ({ players }) => {
  const [playersData, setPlayersData] = useState([...players]);
  return (
    <div className={styles.CardGroupContainer}>
      {playersData &&
        playersData.map((player) => (
          <div key={player.Player} className={styles.card}>
            <CardPlayer player={player} />
          </div>
        ))}
    </div>
  );
};
