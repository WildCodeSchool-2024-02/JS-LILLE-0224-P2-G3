import "./App.css";
import CardStream from "./components/Stream/CardStream";

import Trends from "./components/Trends/Trends";

function App() {
  return (
    <>
      <h2>TENDANCES</h2>
      <Trends />
      <h2>STREAM</h2>
      <CardStream />
    </>
  );
}

export default App;
