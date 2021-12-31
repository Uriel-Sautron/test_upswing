import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  Header,
  CardPlayerGroup,
  IconChipGroup,
  NavBar,
  TeamsDisplay,
} from './components';
import { PlayersContext, TeamsContext } from './context';
import Players from './db/players.json';
import styles from './App.module.scss';

const playersWithId = Players.map((player) => ({ ...player, id: uuidv4() }));

const App = () => {
  const [playersList, setPlayersList] = useState([...playersWithId]);
  const [searchValue, setSearchValue] = useState('');
  const [currentFilter, setCurrentFilter] = useState('');
  const [teams, setTeams] = useState({ team1: [], team2: [] });

  return (
    <PlayersContext.Provider value={{ playersList, setPlayersList }}>
      <TeamsContext.Provider value={{ teams, setTeams }}>
        <Header />
        <NavBar handleSearch={setSearchValue} />
        <section className={styles.sidebarCard}>
          <IconChipGroup
            currentFilter={currentFilter}
            handleChange={setCurrentFilter}
          />
          <CardPlayerGroup
            searchValue={searchValue}
            currentFilter={currentFilter}
          />
        </section>
        <TeamsDisplay teams={teams} />
      </TeamsContext.Provider>
    </PlayersContext.Provider>
  );
};

export default App;
