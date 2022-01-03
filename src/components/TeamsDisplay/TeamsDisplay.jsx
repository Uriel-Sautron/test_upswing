import React from 'react';
import { AvatarChipGroup } from '..';
import { checkWin } from '../../utils';
import styles from './TeamsDisplay.module.scss';

export const TeamsDisplay = ({ teams }) => {
  const { team1, team2 } = teams;
  const teamsIsFull = team1.team.length === 11 && team2.team.length === 11;
  let teamWin = '';
  if (teamsIsFull) {
    teamWin = checkWin(team1.team, team2.team);
  }
  return (
    (team1.team.length || team2.team.length) && (
      <section className={styles.teamsDisplayContainer}>
        <div className={styles.teamContainer}>
          <h2>{team1.name}</h2>
          <AvatarChipGroup team={[...team1.team]} teamName="team1" />
        </div>
        {teamsIsFull && (
          <div className={styles.winContainer}>
            <h2>{teamWin === 'Egalité' ? '' : 'Vainqueur'}</h2>
            <h2>{teamWin}</h2>
          </div>
        )}
        <div className={styles.teamContainer}>
          <h2>{team2.name}</h2>
          <AvatarChipGroup team={[...team2.team]} teamName="team2" />
        </div>
      </section>
    )
  );
};
