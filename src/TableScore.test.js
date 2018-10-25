const scoreByPlayersByRound = round => {
  const result = {};
  const finalScores = (acc, player) => {
    acc[player.name] = player.score;
    // console.log(player)
    return acc;
  };
  return round.reduce(finalScores, result);
};

const createTable = game => {
  const finalScores = {};
  const setFinalScores = (acc, round) => {
    const roundScore = scoreByPlayersByRound(round);
    // console.log(roundScore)
    for (let name in roundScore) {
      if (!acc[name]) {
        acc[name] = roundScore[name];
      } else {
        acc[name] += roundScore[name];
      }
    }
    return acc;
  };
  let objectPlayers = game.reduce(setFinalScores, finalScores);
  return Object.keys(objectPlayers).map(key => ({
    name: key,
    score: objectPlayers[key]
  }));
};

// const createGame = players => {
//   const playersInGame = [];
//   playersInGame.push(players);
//   playersInGame.map(table => table.map(player => (player.score = 0)));
//   return playersInGame;
// };

const saveCurrentRound = round => {
  const savedRound = round.map(player => {
    player.score = player.finalScore;
    delete player.inputScore;
    delete player.finalScore;
    return player;
  });
  return savedRound;
};

it("should save last round and go to the next one", () => {
  const currentRound = [
    { name: "Michel", finalScore: 2, inputScore: 2 },
    { name: "Charles", finalScore: 5, inputScore: 5 },
    { name: "Gautier", finalScore: 1, inputScore: 1 }
  ];
  const expected = [
    { name: "Michel", score: 2 },
    { name: "Charles", score: 5 },
    { name: "Gautier", score: 1 }
  ];
  expect(saveCurrentRound(currentRound)).toEqual(expected);
});

// it("should return a table of players with score", () => {
//   const players = [
//     { name: "Michel" },
//     { name: "Charles" },
//     { name: "Gautier" }
//   ];
//   const expected = [
//     [
//       { name: "Michel", score: 0 },
//       { name: "Charles", score: 0 },
//       { name: "Gautier", score: 0 }
//     ]
//   ];
//   expect(createGame(players)).toEqual(expected);
// });

it("should return a table of object", () => {
  const gameData = [
    [
      { name: "Michel", score: 2 },
      { name: "Charles", score: 5 },
      { name: "Gautier", score: 1 }
    ],
    [
      { name: "Michel", score: 3 },
      { name: "Charles", score: 5 },
      { name: "Gautier", score: 6 }
    ]
  ];
  const expected = [
    {
      name: "Michel",
      score: 5
    },
    {
      name: "Charles",
      score: 10
    },
    {
      name: "Gautier",
      score: 7
    }
  ];
  expect(createTable(gameData)).toEqual(expected);
});

// it("should return an object with scores of cumulated rounds", () => {
//   const gameData = [
//     [
//       { name: "Michel", score: 2 },
//       { name: "Charles", score: 5 },
//       { name: "Gautier", score: 1 }
//     ],
//     [
//       { name: "Michel", score: 3 },
//       { name: "Charles", score: 5 },
//       { name: "Gautier", score: 6 }
//     ]
//   ];
//   const expected = {
//     Michel: 5,
//     Charles: 10,
//     Gautier: 7
//   };
//   expect(createTable(gameData)).toEqual(expected);
// });

it("should return an object with score by players for a round", () => {
  const roundData = [
    { name: "Michel", score: 2 },
    { name: "Charles", score: 5 },
    { name: "Gautier", score: 1 }
  ];

  const expected = {
    Michel: 2,
    Charles: 5,
    Gautier: 1
  };
  expect(scoreByPlayersByRound(roundData)).toEqual(expected);
});
