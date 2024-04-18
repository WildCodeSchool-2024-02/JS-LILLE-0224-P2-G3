import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import CardStreamList from "./components/Stream/CardStreamList";
import Trends from "./components/Trends/Trends";
import Categories from "./components/Categories/Categories";
import Search from "./components/Search/Search";
import "../public/backgroundimages/imagetop.png";

function App() {
  return (
    <>
      <Navbar />
      <div className="image_frame">
        <img
          className="imageTop"
          src="../public/backgroundimages/imagetop.png"
          alt="imagetop"
        />
      </div>
      <Trends />
      <CardStreamList />
      <Search />
      <div className="image_frame">
        <img
          className="imageTop"
          src="../public/backgroundimages/imagebot1.png"
          alt="imagebot"
        />
      </div>

      <Categories />
    </>
  );
}

export default App;
