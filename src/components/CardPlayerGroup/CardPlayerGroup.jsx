import React from 'react';
import { CardPlayer } from '../CardPlayer/CardPlayer';
import styles from './CardPlayerGroup.module.scss';

export const CardPlayerGroup = ({ players, searchPlayers }) => {
  let playersSearch = [...players];

  if (searchPlayers) {
    playersSearch = [...players].filter((player) => {
      return player.Player.toLowerCase().startsWith(
        searchPlayers.toLowerCase()
      );
    });
  }

  return (
    <div className={styles.CardGroupContainer}>
      {playersSearch &&
        playersSearch.map((player) => (
          <div key={player.Player} className={styles.card}>
            <CardPlayer player={player} />
          </div>
        ))}
    </div>
  );
};
