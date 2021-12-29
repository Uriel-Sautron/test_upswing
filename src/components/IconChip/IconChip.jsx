import React from 'react';
import Chip from '@mui/material/Chip';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

export const IconChip = ({ filter, handleChange }) => {
  const { label, key } = filter;

  const handleClick = () => {
    handleChange(key);
  };

  return (
    <Chip icon={<HorizontalRuleIcon />} label={label} onClick={handleClick} />
  );
};
