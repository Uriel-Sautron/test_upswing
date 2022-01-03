import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import { SearchBar, FormModal } from '..';
import { PlayersContext, TeamsContext } from '../../context';
import { shuffleArray } from '../../utils';
import styles from './NavBar.module.scss';

export const NavBar = ({ handleSearch }) => {
  // Call playersList and teams from Context
  const { playersList, setPlayersList } = useContext(PlayersContext);
  const { teams, setTeams } = useContext(TeamsContext);

  const teamsIsPossible = playersList.length >= 22;

  // Function handleCreateTeams takes as input an array of players. It creates 2 random teams of 11 players and remove the chosen players from the playersList.
  const handleCreateTeams = (players) => {
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

    // playersListFiltered is an array without the players that are in the teams.
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
      {teamsIsPossible && (
        <Button
          onClick={() => handleCreateTeams(playersList)}
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
