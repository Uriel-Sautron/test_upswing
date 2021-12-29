import React from 'react';
import { IconChip } from '..';

export const IconChipGroup = ({ filters, handleChange, currentFilter }) => {
  return (
    filters &&
    filters.map((filter) => (
      <IconChip
        key={filter.label}
        filter={filter}
        currentFilter={currentFilter}
        handleChange={handleChange}
      />
    ))
  );
};
