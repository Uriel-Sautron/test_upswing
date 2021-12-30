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
