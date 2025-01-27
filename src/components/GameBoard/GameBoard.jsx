export default function GameBoard({ onSelectSquare, board }) {
  return (
    <ol id="game-board">
      {
        board.map((row, rowIdx) => {
          return (
            <li
              key={rowIdx}
            >
              <ol>
                {
                  row.map((playerSymbol, colIndex) => (
                    <li key={colIndex}>
                      <button onClick={() => onSelectSquare(rowIdx, colIndex)} disabled={playerSymbol !== null}>
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