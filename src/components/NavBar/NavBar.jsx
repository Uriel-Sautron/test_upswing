import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import { SearchBar, FormModal } from '..';
import { PlayersContext, TeamsContext } from '../../context';
import { shuffleArray } from '../../utils';
import styles from './NavBar.module.scss';

export const NavBar = ({ handleSearch }) => {
  const { playersList, setPlayersList } = useContext(PlayersContext);
  const { teams, setTeams } = useContext(TeamsContext);

  const createTeams = (players) => {
    const playersShuffled = shuffleArray(players);
    const team1 = [];
    const team2 = [];
    const teamsIds = [];

    playersShuffled.forEach((player) => {
      if (team1.length < 11) {
        team1.push(player);
        teamsIds.push(player.id);
      } else if (team2.length < 11) {
        team2.push(player);
        teamsIds.push(player.id);
      }
    });

    const playersListFiltered = playersList.filter(
      (player) => teamsIds.includes(player.id) === false
    );

    setPlayersList(playersListFiltered);
    setTeams({
      team1: { ...teams.team1, team: team1 },
      team2: { ...teams.team2, team: team2 },
    });
  };

  return (
    <nav className={styles.navBarContainer}>
      <SearchBar handleSearch={handleSearch} />
      {playersList.lengt < 22 && (
        <Button
          disabled={playersList.length < 22}
          onClick={() => createTeams(playersList)}
          style={{
            color: '#fff',
            fontSize: '20px',
          }}
        >
          Equipes Aléatoires
        </Button>
      )}
      <div>
        <FormModal />
      </div>
    </nav>
  );
};
