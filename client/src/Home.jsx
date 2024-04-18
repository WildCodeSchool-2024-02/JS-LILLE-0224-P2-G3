
import CardStreamList from "./components/Stream/CardStreamList";
import Trends from "./components/Trends/Trends";
import Categories from "./components/Categories/Categories";


function Home() {

    return (
        <>
            <Trends />
            <CardStreamList />
            <Categories />
        </>
    );
}
export default Home;