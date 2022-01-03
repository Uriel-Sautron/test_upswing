// Function checkValue takesas input a value and returns value if it is truthy or 0 if it is falsy
const checkValue = (value) => {
  if (!value) {
    return 0;
  }
  return parseFloat(value);
};

// Function sortPlayers takes as input an array of players and an object { key: string, direction: string } and returns an array of players sorted by the key of the input.
export const sortPlayers = (players, sortBy) => {
  const playersSorted = [...players];
  const sortByKey = sortBy;
  // const sortByDirection = sortBy.direction;

  playersSorted.sort((a, b) => {
    // if (sortByDirection === 'asc') {
    //   return checkValue(a[sortByKey]) - checkValue(b[sortByKey]);
    // }
    return checkValue(b[sortByKey]) - checkValue(a[sortByKey]);
  });

  return playersSorted;
};

// Function searchPlayers takes as input an array of players and a string and returns an array of players that match the search string.
export const searchPlayers = (players, searchValue) => {
  let playersSearch = [...players];
  if (searchValue) {
    playersSearch = [...playersSearch].filter((player) => {
      return player.Player.toLowerCase().includes(searchValue.toLowerCase());
    });
  }

  return playersSearch;
};

// Function teamStat take as input an array of players and returns an object with the stats of the team.
export const stats = (team) => {
  const teamStats = {
    apps: 0.0,
    mins: 0.0,
    buts: 0.0,
    pDecisives: 0.0,
    jau: 0.0,
    rou: 0.0,
    tpM: 0.0,
    pReu: 0.0,
    aeriensGagnes: 0.0,
    hdM: 0.0,
  };

  team.forEach((player) => {
    teamStats.apps += checkValue(player.Apps);
    teamStats.mins += checkValue(player.Mins / player.Apps) / team.length;
    teamStats.buts += checkValue(player.Buts / player.Apps) / team.length;
    teamStats.pDecisives += checkValue(player.PDecisives) / team.length;
    teamStats.jau += checkValue(player.Jau / player.Apps) / team.length;
    teamStats.rou += checkValue(player.Rou / player.Apps) / team.length;
    teamStats.tpM += checkValue(player.TpM) / team.length;
    teamStats.pReu += checkValue(player.PReu) / team.length;
    teamStats.aeriensGagnes += checkValue(player.AeriensGagnes) / team.length;
    teamStats.hdM += checkValue(player.HdM) / team.length;
  });

  return teamStats;
};

// Function checWin takes as input two array of players and returns the name of the team that won according to stats.
export const checkWin = (team1, team2) => {
  const team1Stats = stats(team1);
  const team2Stats = stats(team2);

  let team1Score = 0;
  let team2Score = 0;

  for (const stat in team1Stats) {
    if (stat !== 'rou' || stat !== 'jau' || stat !== 'hdM') {
      if (team1Stats[stat] > team2Stats[stat]) {
        team1Score += 1;
      } else if (team1Stats[stat] < team2Stats[stat]) {
        team2Score += 1;
      }
    }
  }

  if (team1Score > team2Score) {
    return 'Equipe 1';
  }
  if (team1Score < team2Score) {
    return 'Equipe 2';
  }
  return 'Egalité';
};

// Function shuffleArray takes as input a array and returns a shuffled array.
export const shuffleArray = (array) => {
  const arrayShuffled = [...array];
  for (let i = arrayShuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrayShuffled[i], arrayShuffled[j]] = [arrayShuffled[j], arrayShuffled[i]];
  }
  return arrayShuffled;
};

// Function deletePlayer takes as input an array of players and a player id and returns an array of players without the player that was deleted.
export const deletePlayer = (players, playerId) => {
  const playersFiltered = [...players].filter((player) => {
    return player.id !== playerId;
  });
  return playersFiltered;
};
