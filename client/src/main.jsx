import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Results from "./components/Search/Results";


import App from "./App";

const router = createBrowserRouter([
  {
    element: <App />, children: [
      {
        path: "/",
        // homepage
        element: <App />,
      },
      {
        path: "/rechercher",
        element: <Results />,
      },
    ]
  }

]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
