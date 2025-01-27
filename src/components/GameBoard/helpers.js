import { WINNING_COMBINATION, INITIAL_GAME_BOARD } from "./board";

export function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

export function processBoardAndWinner(turns) {
  const gameBoard = setGameBoard(turns);
  const winner = setWinner(turns);

  return [ gameBoard, winner ];
}

function setGameBoard(turns) {
  // create a deep copy
  let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])];

  for (let turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player; 
  }

  return gameBoard;
}

function setWinner(turns) {
  const gameBoard = setGameBoard(turns);

  let winner;
  WINNING_COMBINATION.forEach(combination => {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].col];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];

    if (
      firstSquareSymbol && 
      firstSquareSymbol === secondSquareSymbol && 
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol
    } else if (turns.length === 9) { // if there are no winners
      winner = "Draw"
    }
  })
  
  return winner;
}
