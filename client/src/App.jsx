import "./App.css";
import CardStreamList from "./components/Stream/CardStreamList";
import Trends from "./components/Trends/Trends";
import Categories from "./components/Categories/Categories";
import Search from "./components/Search/Search";

function App() {
  return (
    <>
      <Trends />
      <CardStreamList />
    <Search />
    <Categories/>
    </>
  );
}

export default App;
