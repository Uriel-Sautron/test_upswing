import React, { useState, useEffect } from 'react';
import './App.css';
import {
  Header,
  CardPlayerGroup,
  SearchBar,
  IconChipGroup,
} from './components';
import Players from './db/players.json';
import { sortPlayers } from './utils';

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

const App = () => {
  const [playersData, setPlayersData] = useState([...Players]);
  const [searchValue, setSearchValue] = useState('');
  const [currentFilter, setCurrentFilter] = useState('');

  // This useEffect is called every time the playersData or currentFilter are updated.
  // useEffect(() => {
  //   const playersSorted = sortPlayers(Players, currentFilter);
  //   setPlayersData(playersSorted);
  // }, [Players, currentFilter]);

  return (
    <>
      <Header />
      <SearchBar handleChange={setSearchValue} />
      <section>
        <IconChipGroup
          filters={filters}
          currentFilter={currentFilter}
          handleChange={setCurrentFilter}
        />
        <CardPlayerGroup
          players={playersData}
          searchValue={searchValue}
          currentFilter={currentFilter}
        />
      </section>
    </>
  );
};

export default App;
