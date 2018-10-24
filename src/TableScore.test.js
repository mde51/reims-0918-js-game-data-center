const createTable = game => {
  // let final = history.map(game => game.map(round => round.map(player => player.score)));
  // const nbPlayers = game[0].length;
  const nbRounds = game.length;
  const result = game[0];
  const getSum = (total, score) => total + score;
  for (let i = 0; i < nbRounds.length; i++) {
    let temp = game.map(players => players[i].score);
    console.log("HOLAAAAA");
    result[i].score = temp.reduce(getSum);
  }
  return result;
};

it("should return a table of object", arr => {
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
    { nom: "Michel", score: 5 },
    { nom: "Charles", score: 10 },
    { nom: "Gautier", score: 7 }
  ];
  expect(createTable(gameData)).toEqual(expected);
});
