import React from 'react';
import { IconChip } from '..';

export const IconChipGroup = ({ filters, handleChange }) => {
  return (
    filters &&
    filters.map((filter) => (
      <IconChip
        key={filter.label}
        filter={filter}
        handleChange={handleChange}
      />
    ))
  );
};
