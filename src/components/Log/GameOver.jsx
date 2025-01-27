export default function GameOver({ winner, onRestart, players }) {
  
  if (winner) {
    return <div id="game-over">
      <h2>Game Over!</h2>
      {
        winner !== "Draw"
          ? <p>{players[winner]} won!</p>
          : <p>It's a Draw!</p>
      }
      <p>
        <button onClick={onRestart}>
          Rematch!
        </button>
      </p>
    </div>
  }

  return null;
}