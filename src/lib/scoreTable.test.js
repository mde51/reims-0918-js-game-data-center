const scoreByPlayersByRound = round => {
  const result = {};
  const finalScores = (acc, player) => {
    acc[player.name] = player.score;
    // console.log(player)
    return acc;
  };
  return round.reduce(finalScores, result);
};

const createScoreTable = history => {
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
  let objectPlayers = history.reduce(setFinalScores, finalScores);
  return Object.keys(objectPlayers).map(key => ({
    name: key,
    score: objectPlayers[key]
  }));
};

// it("step 1 - should return an object with score by players for a round", () => {
//   const roundInHistory = [
//     { name: "Michel", score: 2 },
//     { name: "Charles", score: 5 },
//     { name: "Gautier", score: 1 }
//   ];

//   const expected = {
//     Michel: 2,
//     Charles: 5,
//     Gautier: 1
//   };
//   expect(scoreByPlayersByRound(roundInHistory)).toEqual(expected);
// });

// it("step 2 - should return an object with global scores", () => {
//   const history = [
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
//   expect(createScoreTable(history)).toEqual(expected);
// });

it("step 3 - should return a table of object & global scores", () => {
  const history = [
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
  expect(createScoreTable(history)).toEqual(expected);
});
