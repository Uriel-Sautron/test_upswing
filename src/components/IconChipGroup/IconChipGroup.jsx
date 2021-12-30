import React from 'react';
import { IconChip } from '..';
import styles from './IconChipGroup.module.scss';

const filters = [
  { label: 'Joueur', key: 'Player' },
  { label: 'Match joués', key: 'Apps' },
  { label: 'Minutes jouées', key: 'Mins' },
  { label: 'Buts', key: 'Buts' },
  { label: 'Total Passes décisives', key: 'PDecisives' },
  { label: 'Carton jaune', key: 'Jau' },
  { label: 'Carton rouge', key: 'Rou' },
  { label: 'Tir par match', key: 'TpM' },
  { label: 'Taux de passes réussies', key: 'PReu' },
  { label: 'Duels aériens gagnés par match', key: 'AeriensGagnes' },
  { label: 'Homme du match', key: 'HdM' },
];

export const IconChipGroup = ({ handleChange, currentFilter }) => {
  return (
    <aside className={styles.ChipGroupContainer}>
      {filters &&
        filters.map((filter) => (
          <IconChip
            key={filter.label}
            filter={filter}
            currentFilter={currentFilter}
            handleChange={handleChange}
          />
        ))}
    </aside>
  );
};
