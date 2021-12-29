import React from 'react';
import { CardPlayer } from '../CardPlayer/CardPlayer';
import { sortPlayers, searchPlayers } from '../../utils';
import styles from './CardPlayerGroup.module.scss';

export const CardPlayerGroup = ({ players, searchValue, currentFilter }) => {
  let playersSearch = [...players];

  if (currentFilter) {
    playersSearch = sortPlayers(players, currentFilter);
  }

  if (searchValue) {
    playersSearch = searchPlayers(playersSearch, searchValue);
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
