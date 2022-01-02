import React, { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { PlayersContext } from '../../context';
import styles from './FormModal.module.scss';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
};

const inputLabel = [
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

export const FormModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { playersList, setPlayersList } = useContext(PlayersContext);

  const handleAddPlayer = (e) => {
    e.preventDefault();
    const newPlayer = {
      id: uuidv4(),
      Player: e.target.Player.value,
      Apps: e.target.Apps.value,
      Mins: e.target.Mins.value,
      Buts: e.target.Buts.value,
      PDecisives: e.target.PDecisives.value,
      Jau: e.target.Jau.value,
      Rou: e.target.Rou.value,
      TpM: e.target.TpM.value,
      PReu: e.target.PReu.value,
      AeriensGagnes: e.target.AeriensGagnes.value,
      HdM: e.target.HdM.value,
    };

    setPlayersList([...playersList, newPlayer]);
    handleClose();
  };

  return (
    <div className={styles.formModalContainer}>
      <Button
        onClick={handleOpen}
        style={{
          color: '#fff',
        }}
      >
        Ajouter un joueur
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form
            action=""
            onSubmit={(e) => handleAddPlayer(e)}
            className={styles.formContainer}
          >
            {inputLabel &&
              inputLabel.map((label) => (
                <TextField
                  required
                  variant="standard"
                  label={label.key}
                  id={label.key}
                  placeholder={label.label}
                  margin="normal"
                  key={uuidv4()}
                />
              ))}
            <Button type="submit" variant="contained" color="success">
              Ajouter
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};
