import { newRound } from "./newRound.js";

it("button New Round", () => {
  const currentRound = [
    { name: "Michel", finalScore: 3, inputScore: 3 },
    { name: "Charles", finalScore: 6, inputScore: 6 },
    { name: "Gautier", finalScore: 4, inputScore: 4 }
  ];
  const currentHistory = {};
  const gameId = 1234;

  const expectedHistory = {
    1234: [
      [
        { name: "Michel", score: 3 },
        { name: "Charles", score: 6 },
        { name: "Gautier", score: 4 }
      ]
    ]
  };
  expect(newRound(currentRound, currentHistory, gameId)).toEqual(
    expectedHistory
  );
});

it("button New Round", () => {
  const currentRound = [
    { name: "Michel", finalScore: 3, inputScore: 3 },
    { name: "Charles", finalScore: 6, inputScore: 6 },
    { name: "Gautier", finalScore: 4, inputScore: 4 }
  ];

  const gameId = 1234;

  const currentHistory = {
    1234: [
      [
        { name: "Michel", score: 3 },
        { name: "Charles", score: 6 },
        { name: "Gautier", score: 4 }
      ]
    ]
  };

  const expectedHistory = {
    1234: [
      [
        { name: "Michel", score: 3 },
        { name: "Charles", score: 6 },
        { name: "Gautier", score: 4 }
      ],
      [
        { name: "Michel", score: 3 },
        { name: "Charles", score: 6 },
        { name: "Gautier", score: 4 }
      ]
    ]
  };
  expect(newRound(currentRound, currentHistory, gameId)).toEqual(
    expectedHistory
  );
});

it("button New Round", () => {
  const currentRound = [
    { name: "Michel", finalScore: 3, inputScore: 3 },
    { name: "Charles", finalScore: 6, inputScore: 6 },
    { name: "Gautier", finalScore: 4, inputScore: 4 }
  ];

  const gameId = 5678;

  const currentHistory = {
    1234: [
      [
        { name: "Michel", score: 3 },
        { name: "Charles", score: 6 },
        { name: "Gautier", score: 4 }
      ]
    ]
  };

  const expectedHistory = {
    1234: [
      [
        { name: "Michel", score: 3 },
        { name: "Charles", score: 6 },
        { name: "Gautier", score: 4 }
      ]
    ],
    5678: [
      [
        { name: "Michel", score: 3 },
        { name: "Charles", score: 6 },
        { name: "Gautier", score: 4 }
      ]
    ]
  };
  expect(newRound(currentRound, currentHistory, gameId)).toEqual(
    expectedHistory
  );
});
