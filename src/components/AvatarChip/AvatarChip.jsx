import React, { useContext } from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import { TeamsContext, PlayersContext } from '../../context';

export const AvatarChip = ({ player, teamName }) => {
  const { teams, setTeams } = useContext(TeamsContext);
  const { playersList, setPlayersList } = useContext(PlayersContext);

  // This function is called when the user clicks on the cross Chip. It removes the player from the team and adds it to the players list.
  const handleDelete = () => {
    const team = [...teams[teamName].team];
    const newTeam = team.filter((p) => p.id !== player.id);
    const newTeams = {
      ...teams,
      [teamName]: { ...teams[teamName], team: newTeam },
    };
    setTeams(newTeams);
    setPlayersList([...playersList, player]);
  };

  return (
    <Chip
      avatar={<Avatar>{player.Player[0]}</Avatar>}
      label={player.Player}
      onDelete={handleDelete}
      style={{
        fontSize: '18px',
      }}
    />
  );
};
