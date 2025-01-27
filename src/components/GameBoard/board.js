const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const WINNING_COMBINATION = [
  [
    { row: 0, col: 0 },
    { row: 0, col: 1 },
    { row: 0,  col: 2 }
  ],
  [
    { row: 1, col: 0 },
    { row: 1, col: 1 },
    { row: 1, col: 2 }
  ],
  [
    { row: 2, col:  0},
    { row: 2, col:  1},
    { row: 2, col:  2}
  ],
  [
    { row: 0, col: 1 },
    { row: 1, col: 1 },
    { row: 2, col: 1 }
  ],
  [
    { row: 0, col: 2 },
    { row: 1, col: 2 },
    { row: 2, col: 2 }
  ],
  [
    { row: 0, col: 0 },
    { row: 1, col: 1 },
    { row: 2, col: 2 }
  ],
  [
    { row: 0, col: 0},
    { row: 1, col: 0},
    { row: 2, col: 0}
  ],
  [
    { row: 2, col: 0 },
    { row: 1, col: 1 },
    { row: 0, col: 2 }
  ]
]

export { INITIAL_GAME_BOARD, WINNING_COMBINATION };