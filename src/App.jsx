import React, { useState } from 'react';
import { Header, CardPlayerGroup, IconChipGroup, NavBar } from './components';
import { PlayersContext, TeamsContext } from './context';
import Players from './db/players.json';
import styles from './App.module.scss';

const App = () => {
  const [playersList, setPlayersList] = useState([...Players]);
  const [searchValue, setSearchValue] = useState('');
  const [currentFilter, setCurrentFilter] = useState('');
  const [teams, setTeams] = useState({ teams1: [], teams2: [] });

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
      </TeamsContext.Provider>
    </PlayersContext.Provider>
  );
};

export default App;
