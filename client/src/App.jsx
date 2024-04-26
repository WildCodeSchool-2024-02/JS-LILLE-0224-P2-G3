import { Outlet } from "react-router-dom";
import { PageProvider } from "./contexts/PageContext";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    
    <PageProvider>
      <Navbar />
      <main>
        <Outlet />
      </main>
      </PageProvider>
    
  );
}

export default App;
