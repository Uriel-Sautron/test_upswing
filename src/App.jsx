import React from 'react';
import './App.css';
import { Header, PlayersTable, CardPlayerGroup } from './components';
import Players from './db/players.json';

const App = () => {
  return (
    <>
      <Header />
      <CardPlayerGroup players={Players} />
    </>
  );
};

export default App;
