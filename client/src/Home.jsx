
import CardStreamList from "./components/Stream/CardStreamList";
import Trends from "./components/Trends/Trends";
import Categories from "./components/Categories/Categories";
import "./Home.scss"


function Home() {

    return (
        <>
            <img className="image" src="./public/background/imagetop.png" alt="" />
            <Trends />
            <CardStreamList />
            <img className="image2" src="./public/background/imagebot1.png" alt="" />
            <Categories />
        </>
    );
}
export default Home;