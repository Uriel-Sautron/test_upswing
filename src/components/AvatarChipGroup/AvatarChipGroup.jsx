import React from 'react';
import { AvatarChip } from '..';
import styles from './AvatarChipGroup.module.scss';

export const AvatarChipGroup = ({ team, teamName }) => {
  console.log('team:', team);
  const teamIsFull = team.length === 11;
  return (
    <div className={styles.avatarChipGroupContainer}>
      {team &&
        team.map((player) => (
          <AvatarChip player={player} teamName={teamName} />
        ))}
      {teamIsFull && <p>Taux</p>}
    </div>
  );
};
