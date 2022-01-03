import React, { useState, useContext } from 'react';
import ReactCardFlip from 'react-card-flip';
import Button from '@mui/material/Button';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { deletePlayer } from '../../utils';
import { PlayersContext, TeamsContext } from '../../context';
import { ReactComponent as TeamRedIcon } from '../../icons/team_red.svg';
import { ReactComponent as TeamBlueIcon } from '../../icons/team_blue.svg';
import styles from './CardPlayer.module.scss';
import ballon from '../../img/ballon.png';

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
    const newPlayersList = deletePlayer(playersList, idPlayer);
    setPlayersList(newPlayersList);
  };

  // This function is called when the user clicks on the button team1 or team2.
  const handleSelectTeam = (teamSelect, idPlayer) => {
    const newTeams = { ...teams };
    const newPlayer = playersList.find((p) => p.id === idPlayer);
    newTeams[teamSelect].team.push(newPlayer);
    setTeams(newTeams);
    handleDeletePlayer(idPlayer);
  };

  const teamIsFull = (teamSelect) => teams[teamSelect].team.length === 11;

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
        <Button
          onClick={() => handleDeletePlayer(id)}
          color="error"
          size="small"
        >
          <DeleteForeverIcon />
        </Button>

        <img src={ballon} alt="Ballon de foot" height="150px" width="150px" />

        {/* Buttons choice teams */}
        <div className={styles.teamButton}>
          <Button
            disabled={teamIsFull('team1')}
            color="primary"
            onClick={() => handleSelectTeam('team1', id)}
          >
            <TeamBlueIcon />
          </Button>
          <Button
            disabled={teamIsFull('team2')}
            color="error"
            onClick={() => handleSelectTeam('team2', id)}
          >
            <TeamRedIcon />
          </Button>
        </div>
        <div className={styles.cardPlayerName}>
          <h2>{Player}</h2>
        </div>
        <div className={styles.buttonBottom}>
          <Button
            onClick={handleClick}
            variant="contained"
            style={{
              background:
                'linear-gradient(to left top, rgba(141,124,74,1) 50%, rgba(255,255,255,1) 100%)',
            }}
          >
            Details
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

        <Button
          onClick={handleClick}
          variant="contained"
          style={{
            background:
              'linear-gradient(to left top, rgba(141,124,74,1) 50%, rgba(255,255,255,1) 100%)',
          }}
        >
          Retour
        </Button>
      </div>
    </ReactCardFlip>
  );
};
