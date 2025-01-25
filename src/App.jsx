import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="PLAYER 1" symbol="X" />
          <Player initialName="PLAYER 2" symbol="O" />
        </ol>
        <GameBoard />
      </div>
    </main>
  )
}

export default App
