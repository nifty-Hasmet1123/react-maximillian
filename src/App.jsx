import Player from "./components/Player";
import TimeChallenger from "./components/TimeChallenger";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimeChallenger title="Easy" targetTime={1}/>
        <TimeChallenger title="Not Easy" targetTime={5}/>
        <TimeChallenger title="Getting tough" targetTime={10}/>
        <TimeChallenger title="Pros Only" targetTime={15}/>
      </div>
    </>
  );
}

export default App;
