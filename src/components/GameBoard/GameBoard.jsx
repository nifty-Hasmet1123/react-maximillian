import { initialGameBoard } from "./board";
import { useState } from "react";

export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  const handleSelectSquare = (rowIdx, colIndex, symbol=null) => {
    setGameBoard(prevGameBoard => {
      let copyGameBoard = [...prevGameBoard.map(row => [...row])];

      copyGameBoard[rowIdx][colIndex] = "X";
      return copyGameBoard;
    });
  }

  return (
    <ol id="game-board">
      {
        gameBoard.map((row, rowIdx) => {
          return (
            <li
              key={rowIdx}
            >
              <ol>
                {
                  row.map((playerSymbol, colIndex) => (
                    <li key={colIndex}>
                      <button onClick={() => handleSelectSquare(rowIdx, colIndex)}>
                        {playerSymbol}
                      </button>
                    </li>
                  ))
                }
              </ol>
            </li>
          );
        })
      }
    </ol>
  );
}