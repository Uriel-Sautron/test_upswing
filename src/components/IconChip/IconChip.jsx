import React from 'react';
import Chip from '@mui/material/Chip';
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
      label={label}
      color={isActive ? 'success' : 'default'}
      onClick={handleClick}
      style={{
        backgroundColor: 'rgb(255, 255, 255, 0.7)',
        fontSize: '18px',
      }}
    />
  );
};
