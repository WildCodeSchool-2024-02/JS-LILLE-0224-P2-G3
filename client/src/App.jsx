import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import CardStreamList from "./components/Stream/CardStreamList";
import Trends from "./components/Trends/Trends";
import Categories from "./components/Categories/Categories";
import Search from "./components/Search/Search";

function App() {
  return (
    <>
    <Navbar />
      <Trends />
      <CardStreamList />
    <Search />
    <Categories/>
    </>
  );
}

export default App;
