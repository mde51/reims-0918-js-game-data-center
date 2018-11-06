import { scoreTable } from "./scoreTable.js";

it("should return a table of object & global scores", () => {
  const gameId = 5678;
  const history = {
    1234: [
      [
        { name: "Michel", score: 21 },
        { name: "Charles", score: 5 },
        { name: "Gautier", score: 1 }
      ],
      [
        { name: "Michel", score: 3 },
        { name: "Charles", score: 5 },
        { name: "Gautier", score: 6 }
      ]
    ],
    5678: [
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
    ]
  };

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
  expect(scoreTable(history, gameId)).toEqual(expected);
});
