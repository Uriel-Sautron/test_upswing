import React from 'react';
import { AvatarChip } from '..';
import styles from './AvatarChipGroup.module.scss';

export const AvatarChipGroup = ({ team, teamName }) => {
  return (
    <div className={styles.avatarChipGroupContainer}>
      {team &&
        team.map((player) => (
          <AvatarChip player={player} teamName={teamName} key={player.id} />
        ))}
    </div>
  );
};
