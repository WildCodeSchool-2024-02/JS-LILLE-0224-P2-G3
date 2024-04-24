import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Results from "./components/Search/Results";

import App from "./App";
import Home from "./Home";
import CategoryCard from "./components/CategoryPage/CategoryCard";
import DeployCard from "./components/CategoryPage/DeployCard";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/rechercher",
        element: <Results />,
      },
      {
        path: "/decouvrir/categorie",
        element: <CategoryCard />,
      },
      {
        path: "/decouvrir/categorie/jeu",
        element: <DeployCard />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
