import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  Header,
  CardPlayerGroup,
  IconChipGroup,
  NavBar,
  TeamsDisplay,
  Footer,
} from './components';
import { PlayersContext, TeamsContext } from './context';
import Players from './db/players.json';
import styles from './App.module.scss';

// Add id to player
const playersWithId = Players.map((player) => ({ ...player, id: uuidv4() }));

const App = () => {
  const [playersList, setPlayersList] = useState([...playersWithId]);
  const [searchValue, setSearchValue] = useState('');
  const [currentFilter, setCurrentFilter] = useState('');
  const [teams, setTeams] = useState({
    team1: { name: 'Equipe 1', team: [], score: 0 },
    team2: { name: 'Equipe 2', team: [], score: 0 },
  });

  return (
    <PlayersContext.Provider value={{ playersList, setPlayersList }}>
      <TeamsContext.Provider value={{ teams, setTeams }}>
        {/* Top App */}
        <Header />
        <NavBar handleSearch={setSearchValue} />

        {/* Main App */}
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

        {/* Bottom App */}
        <Footer />
      </TeamsContext.Provider>
    </PlayersContext.Provider>
  );
};

export default App;
