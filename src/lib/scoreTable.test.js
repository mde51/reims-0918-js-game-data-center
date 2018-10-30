import { scoreTable } from "./scoreTable.js";

it("should return a table of object & global scores", () => {
  const idGame = "unique_game_id";
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
  // const expected = {
  //   unique_game_id: [
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
  //   ]
  // };
  const expected = {
    unique_game_id: [
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
  expect(scoreTable(history, idGame)).toEqual(expected);
});
