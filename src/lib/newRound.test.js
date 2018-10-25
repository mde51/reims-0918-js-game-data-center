import { newRound } from "./newRound.js";

it("button New Round", () => {
  const currentRound = [
    { name: "Michel", finalScore: 3, inputScore: 3 },
    { name: "Charles", finalScore: 6, inputScore: 6 },
    { name: "Gautier", finalScore: 4, inputScore: 4 }
  ];
  const currentHistory = [
    [
      { name: "Michel", score: 2 },
      { name: "Charles", score: 5 },
      { name: "Gautier", score: 1 }
    ]
  ];
  const expectedHistory = [
    [
      { name: "Michel", score: 2 },
      { name: "Charles", score: 5 },
      { name: "Gautier", score: 1 }
    ],
    [
      { name: "Michel", score: 3 },
      { name: "Charles", score: 6 },
      { name: "Gautier", score: 4 }
    ]
  ];
  expect(newRound(currentRound, currentHistory)).toEqual(expectedHistory);
});
