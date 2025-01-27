import Player from "./components/Player/Player";
import GameBoard from "./components/GameBoard/GameBoard";
import Log from "./components/Log/Log";
import GameOver from "./components/Log/Gameover";
import { useState } from "react";
import { deriveActivePlayer, processBoardAndWinner } from "./components/GameBoard/helpers";
import { PLAYERS } from "./components/Player/players";

function App() {
  // const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState(PLAYERS);

  const activePlayer = deriveActivePlayer(gameTurns); // no need for a state management (reducing state managements)
  const [gameBoard, winner] = processBoardAndWinner(gameTurns); // no need for state management.

  const handleSelectSquare = (rowIdx, colIdx) => {
    // setActivePlayer(currentPlayer => currentPlayer === "X" ? "O": "X");
    setGameTurns(prevTurn => {
      const currentPlayer = deriveActivePlayer(prevTurn);

      const data = {
        square: { row: rowIdx, col: colIdx },
        player: currentPlayer
      }

      const updatedTurns = [data, ...prevTurn];

      return updatedTurns;
    });
  }

  const handleRestart = () => {
    setGameTurns([]);
  }

  const handlePlayerChange = (newName, symbol) => {
    setPlayers(prev => ({ ...prev, [symbol]: newName.toUpperCase() }));
  }
  
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name={players.X} symbol="X" isActive={activePlayer === "X"} onChangeName={handlePlayerChange} />
          <Player name={players.O} symbol="O" isActive={activePlayer === "O"}  onChangeName={handlePlayerChange} />
        </ol>
        <GameOver winner={winner} setGameTurns={setGameTurns} onRestart={handleRestart} players={players} />
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <div>
        <Log turns={gameTurns} />
      </div>
    </main>
  );
}

export default App;
