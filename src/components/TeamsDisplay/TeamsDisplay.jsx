import React from 'react';
import { AvatarChipGroup } from '..';
import styles from './TeamsDisplay.module.scss';

export const TeamsDisplay = ({ teams }) => {
  const { team1, team2 } = teams;
  return (
    (team1.length || team2.length) && (
      <section className={styles.teamsDisplayContainer}>
        <div className={styles.teamContainer}>
          <h2>Team 1</h2>
          <AvatarChipGroup team={[...team1]} teamName="team1" />
        </div>
        <div className={styles.teamContainer}>
          <h2>Team 2</h2>
          <AvatarChipGroup team={[...team2]} teamName="team2" />
        </div>
      </section>
    )
  );
};
