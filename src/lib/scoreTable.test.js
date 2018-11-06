import { scoreTable } from "./scoreTable.js";

it("should return a table of object & global scores", () => {
  const gameId = "gameId";
  const history = { gameId : [
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
  ]};

  const expected = {
    gameId: [
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
    ]
  };
  expect(scoreTable(history, gameId)).toEqual(expected);
});
