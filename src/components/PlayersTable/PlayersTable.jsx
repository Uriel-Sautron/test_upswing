import React, { useState, useEffect } from 'react';
import styles from './PlayersTable.module.scss';
import { sortPlayers } from '../../utils';

// Array for the head of the table
const tableHead = [
  { head: 'Joueur', key: 'Player' },
  { head: 'Match joués', key: 'Apps' },
  { head: 'Minutes jouées', key: 'Mins' },
  { head: 'Buts', key: 'Buts' },
  { head: 'Total Passes décisives', key: 'PDecisives' },
  { head: 'Carton jaune', key: 'Jau' },
  { head: 'Carton rouge', key: 'Rou' },
  { head: 'Tir par match', key: 'TpM' },
  { head: 'Taux de passes réussies', key: 'PReu' },
  { head: 'Duels aériens gagnés par match', key: 'AeriensGagnes' },
  { head: 'Homme du match', key: 'HdM' },
];

export const PlayersTable = ({ players }) => {
  const [playersData, setPlayersData] = useState([...players]);
  const [sortBy, setSortBy] = useState({ key: 'Apps', direction: 'desc' });
  const [tHeadSelect, setTHeadSelect] = useState(sortBy.key);
  console.log('tHeadSelect:', tHeadSelect);

  // This useEffect is called every time the playersData or sortBy are updated.
  useEffect(() => {
    const playersSorted = sortPlayers(players, sortBy);
    setPlayersData(playersSorted);
  }, [players, sortBy]);

  // This function is called when the user clicks on a column header. It updates the sortBy state.
  const handleSort = (key) => {
    const direction =
      sortBy.key === key && sortBy.direction === 'desc' ? 'asc' : 'desc';
    setTHeadSelect(key);
    setSortBy({ key, direction });
  };

  return (
    <div className={styles.tableContainer}>
      <table>
        <thead>
          <tr>
            {tableHead.map((head) => (
              <th
                key={head.key}
                onClick={() => {
                  handleSort(head.key);
                }}
                aria-hidden="true"
                // className check if the column is selected and if direction is asc or desc to add the right class
                className={
                  tHeadSelect === head.key &&
                  (sortBy.direction === 'desc'
                    ? styles.tableHeadSelectAsc
                    : styles.tableHeadSelect)
                }
              >
                {head.head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {playersData.map((player) => (
            <tr key={player.Player}>
              <td>{player.Player}</td>
              <td>{player.Apps}</td>
              <td>{player.Mins}</td>
              <td>{player.Buts}</td>
              <td>{player.PDecisives}</td>
              <td>{player.Jau}</td>
              <td>{player.Rou}</td>
              <td>{player.TpM}</td>
              <td>{player.PReu}</td>
              <td>{player.AeriensGagnes}</td>
              <td>{player.HdM}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
