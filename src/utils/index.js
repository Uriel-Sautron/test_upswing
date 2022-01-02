// checkValue takes a value and returns value if it is truthy or 0 if it is falsy
const checkValue = (value) => {
  if (value === undefined || value === null) {
    return 0;
  }
  return value;
};

// sortPlayers takes as input a array of players and an object { key: string, direction: string } and returns an array of players sorted by the key of the input.
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

// searchPlayers takes as input a array of players and a string and returns an array of players that match the search string.
export const searchPlayers = (players, searchValue) => {
  let playersSearch = [...players];
  if (searchValue) {
    playersSearch = [...playersSearch].filter((player) => {
      return player.Player.toLowerCase().includes(searchValue.toLowerCase());
    });
  }

  return playersSearch;
};

export const teamStat = (team) => {
  const teamStats = {
    apps: 0 / team.length,
    mins: 0 / team.length,
    buts: 0 / team.length,
    pDecisives: 0 / team.length,
    jau: 0 / team.length,
    rou: 0 / team.length,
    tpM: 0 / team.length,
    pReu: 0 / team.length,
    aeriensGagnes: 0 / team.length,
    hdM: 0 / team.length,
  };

  team.forEach((player) => {
    teamStats.apps += checkValue(player.Apps);
    teamStats.mins += checkValue(player.Mins / player.Apps);
    teamStats.buts += checkValue(player.Buts / player.Apps);
    teamStats.pDecisives += checkValue(player.PDecisives);
    teamStats.jau += checkValue(player.Jau / player.Apps);
    teamStats.rou += checkValue(player.Rou / player.Apps);
    teamStats.tpM += checkValue(player.TpM);
    teamStats.pReu += checkValue(player.PReu);
    teamStats.aeriensGagnes += checkValue(player.AeriensGagnes);
    teamStats.hdM += checkValue(player.HdM);
  });

  return teamStats;
};
