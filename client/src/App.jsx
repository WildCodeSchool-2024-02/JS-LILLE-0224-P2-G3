import "./App.css";
import CardStreamList from "./components/Stream/CardStreamList";
import Trends from "./components/Trends/Trends";

function App() {
  return (
    <>
      <h2>TENDANCES</h2>
      <Trends />
      <CardStreamList />
    </>
  );
}

export default App;
