import "./App.css";
import { Outlet } from "react-router-dom";
// import CardStreamList from "./components/Stream/CardStreamList";
// import Trends from "./components/Trends/Trends";
// import Categories from "./components/Categories/Categories";




function App() {
  return (
    <>

    <Search />
      {/* <Trends />
      <CardStreamList />
    <Categories/> */}
    <main>
      <Outlet/>
    </main>
    </>
  );
}

export default App;
