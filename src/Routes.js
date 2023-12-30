// Routes.js
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Userid from "./pages/User_id";
// import Admin from "./pages/Admin";
import Admin from "./pages/Admin";
import Salesexc from "./pages/Salesexc";
import AddEmployee from "./pages/AddEmployee";
import SalesAnalysis from "./pages/SalesAnalysis";
import AddProduct from "./pages/AddProduct";

function AppRoutes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    }, //oteher page
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/user",
      element: <Userid />,
    },
    {
      path: "/admin",
      element: <Admin />,
    },
    {
      path: "/salesteam",
      element: <Salesexc />,
    },
    {
      path:"/addEmployee",
      element: <AddEmployee/>
    },
    {
      path:"/salesAnalysis",
      element: <SalesAnalysis/>
    },
    {
      path:"/AddProduct",
      element: <AddProduct/>
    },
  ]);
  return <RouterProvider router={router} />;
}

export default AppRoutes;
