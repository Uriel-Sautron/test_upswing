import React from 'react';
import Chip from '@mui/material/Chip';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export const IconChip = ({ filter, handleChange, currentFilter }) => {
  const { label, key } = filter;

  const handleClick = () => {
    handleChange(key);
  };

  const isActive = currentFilter === key;

  return (
    <Chip
      icon={isActive ? <ArrowUpwardIcon /> : null}
      variant="outlined"
      label={label}
      color={isActive ? 'success' : 'default'}
      onClick={handleClick}
    />
  );
};
