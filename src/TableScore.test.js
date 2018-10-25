const scoreByPlayersByRound = round => {
  const result = {};
  const finalScores = (acc, player) => {
    acc[player.nom] = player.score;
    // console.log(player)
    return acc;
  };
  return round.reduce(finalScores, result);
};

const createTable = game => {
  const finalScores = {};
  const setFinalScores = (acc, round) => {
    const roundScore = scoreByPlayersByRound(round);
    for (let name in roundScore) {
      if (!acc[name]) {
        acc[name] = roundScore[name];
      } else {
        acc[name] += roundScore[name];
      }
      // console.log(roundScore[name])
    }
    return acc;
  };
  let objectPlayers = game.reduce(setFinalScores, finalScores);
  return Object.keys(objectPlayers).map(key => ({ name: key, score: objectPlayers[key] }))
};

it("should return a table of object", () => {
  const gameData = [
    [
      { nom: "Michel", score: 2 },
      { nom: "Charles", score: 5 },
      { nom: "Gautier", score: 1 }
    ],
    [
      { nom: "Michel", score: 3 },
      { nom: "Charles", score: 5 },
      { nom: "Gautier", score: 6 }
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
//       { nom: "Michel", score: 2 },
//       { nom: "Charles", score: 5 },
//       { nom: "Gautier", score: 1 }
//     ],
//     [
//       { nom: "Michel", score: 3 },
//       { nom: "Charles", score: 5 },
//       { nom: "Gautier", score: 6 }
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
    { nom: "Michel", score: 2 },
    { nom: "Charles", score: 5 },
    { nom: "Gautier", score: 1 }
  ];

  const expected = {
    Michel: 2,
    Charles: 5,
    Gautier: 1
  };
  expect(scoreByPlayersByRound(roundData)).toEqual(expected);
});
