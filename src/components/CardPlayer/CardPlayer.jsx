import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import styles from './CardPlayer.module.scss';

export const CardPlayer = ({ player }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const {
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
        <h2>{Player}</h2>
        <button onClick={handleClick} type="button">
          Details
        </button>
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
              <p>Taux de passes réussies:</p>
              <p>{PReu || 0}</p>
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

        <button onClick={handleClick} type="button">
          Retour
        </button>
      </div>
    </ReactCardFlip>
  );
};
