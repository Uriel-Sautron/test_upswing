import React, { useState, useContext } from 'react';
import ReactCardFlip from 'react-card-flip';
import Button from '@mui/material/Button';
import { PlayersContext, TeamsContext } from '../../context';
import styles from './CardPlayer.module.scss';

export const CardPlayer = ({ player }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { playersList, setPlayersList } = useContext(PlayersContext);
  const { teams, setTeams } = useContext(TeamsContext);

  // This function is called when the user clicks on the button card.
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  // This function is called when the user clicks on the button delete.
  const handleDeletePlayer = (idPlayer) => {
    const newPlayersList = playersList.filter((p) => p.id !== idPlayer);
    setPlayersList(newPlayersList);
  };

  const handleSelectTeam = (team, idPlayer) => {
    const newTeams = { ...teams };
    const newPlayer = playersList.find((p) => p.id === idPlayer);
    newTeams[team].push(newPlayer);
    setTeams(newTeams);
    handleDeletePlayer(idPlayer);
  };

  const {
    id,
    Player,
    Apps,
    Mins,
    Buts,
    PDecisives,
    Jau,
    Rou,
    TpM,
    PReu,
    AeriensGagnes,
    HdM,
  } = player;

  return (
    <ReactCardFlip
      isFlipped={isFlipped}
      flipDirection="vertical"
      className={styles.cardFlip}
    >
      <div className={styles.cardPlayerContainer}>
        <div>
          <h2>{Player}</h2>
        </div>
        <div className={styles.teamButton}>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => handleSelectTeam('team1', id)}
          >
            Equipe 1
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={() => handleSelectTeam('team2', id)}
          >
            Equipe 2
          </Button>
        </div>
        <div>
          <Button onClick={handleClick} variant="contained" color="success">
            Details
          </Button>
          <Button
            onClick={() => handleDeletePlayer(id)}
            color="error"
            size="small"
          >
            Supprimer
          </Button>
        </div>
      </div>

      <div className={styles.cardPlayerContainer}>
        <div className={styles.cardContentBack}>
          {/* Details left */}
          <div className={styles.cardDetailGroup}>
            <div className={styles.cardDetail}>
              <p>Match joués:</p>
              <p>{Apps || 0}</p>
            </div>
            <div className={styles.cardDetail}>
              <p>Minutes jouées:</p>
              <p>{Mins || 0}</p>
            </div>
            <div className={styles.cardDetail}>
              <p>Buts:</p>
              <p>{Buts || 0}</p>
            </div>
            <div className={styles.cardDetail}>
              <p>Total Passes décisives:</p>
              <p>{PDecisives || 0}</p>
            </div>
            <div className={styles.cardDetail}>
              <p>Carton jaune:</p>
              <p>{Jau || 0}</p>
            </div>
          </div>

          {/* Details right */}
          <div className={styles.cardDetailGroup}>
            <div className={styles.cardDetail}>
              <p>Tir par match:</p>
              <p>{TpM || 0}</p>
            </div>
            <div className={styles.cardDetail}>
              <p>Passes réussies:</p>
              <p>{PReu || 0}%</p>
            </div>
            <div className={styles.cardDetail}>
              <p>Duels aériens gagnés par match:</p>
              <p>{AeriensGagnes || 0}</p>
            </div>
            <div className={styles.cardDetail}>
              <p>Homme du match:</p>
              <p>{HdM || 0}</p>
            </div>
            <div className={styles.cardDetail}>
              <p>Carton rouge:</p>
              <p>{Rou || 0}</p>
            </div>
          </div>
        </div>

        <Button onClick={handleClick} variant="contained" color="success">
          Retour
        </Button>
      </div>
    </ReactCardFlip>
  );
};
