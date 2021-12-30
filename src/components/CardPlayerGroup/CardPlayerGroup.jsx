import React, { useContext } from 'react';
import { CardPlayer } from '../CardPlayer/CardPlayer';
import { sortPlayers, searchPlayers } from '../../utils';
import { PlayersContext } from '../../context';
import styles from './CardPlayerGroup.module.scss';

export const CardPlayerGroup = ({ searchValue, currentFilter }) => {
  const { playersList } = useContext(PlayersContext);
  let playersSearch = [...playersList];

  if (currentFilter) {
    playersSearch = sortPlayers(playersList, currentFilter);
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
