import React from 'react';
import Chip from '@mui/material/Chip';

export const AvatarChip = ({ player }) => {
  return <Chip avatar={player.Player[0]} label={player.Player} />;
};
