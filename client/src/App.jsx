import { Outlet } from "react-router-dom";
import { PageProvider } from "./contexts/PageContext";
import { GameProvider } from "./contexts/GameContext";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <GameProvider>
      <PageProvider>
        <Navbar />
        <main>
          <Outlet />
        </main>
      </PageProvider>
    </GameProvider>
  );
}

export default App;
