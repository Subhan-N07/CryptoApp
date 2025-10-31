import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Transaction from "./pages/Transaction/Transaction";
import Support from "./pages/Support/Support";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/transaction",
    element: <Transaction />,
  },
  {
    path: "/support",
    element: <Support />,
  },
]);

const App = () => {
  return (
    <div className="bg-gradient-to-r from-stone-950 via-emerald-800 to-stone-950">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
