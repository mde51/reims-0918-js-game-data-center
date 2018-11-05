import { newRound } from "./newRound.js";

it("button New Round", () => {
  const currentRound = [
    { name: "Michel", finalScore: 3, inputScore: 3 },
    { name: "Charles", finalScore: 6, inputScore: 6 },
    { name: "Gautier", finalScore: 4, inputScore: 4 }
  ];
  const currentHistory = {};
  const gameId = "testID";

  const expectedHistory = {
    testID: [
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

  const gameId = "testID";

  const currentHistory = {
    testID: [
      [
        { name: "Michel", score: 3 },
        { name: "Charles", score: 6 },
        { name: "Gautier", score: 4 }
      ]
    ]
  };

  const expectedHistory = {
    testID: [
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

  const gameId = "testID2";

  const currentHistory = {
    testID: [
      [
        { name: "Michel", score: 3 },
        { name: "Charles", score: 6 },
        { name: "Gautier", score: 4 }
      ]
    ]
  };

  const expectedHistory = {
    testID: [
      [
        { name: "Michel", score: 3 },
        { name: "Charles", score: 6 },
        { name: "Gautier", score: 4 }
      ]
    ],
    testID2: [
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
