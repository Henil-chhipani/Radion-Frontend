// Routes.js
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/customer/Login";
import Home from "./pages/customer/Home";
import Register from "./pages/customer/Register";
import Userid from "./pages/customer/User_id";
// import Admin from "./pages/Admin";
import Admin from "./pages/admin/Admin";
import Salesexc from "./pages/salesteam/Salesexc";
import AddEmployee from "./pages/admin/AddEmployee";
import SalesAnalysis from "./pages/SalesAnalysis";
import AddProduct from "./pages/salesteam/AddProduct";
import Attendence from "./pages/salesteam/Attendence";

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
      path: "/addEmployee",
      element: <AddEmployee />,
    },
    {
      path: "/salesAnalysis",
      element: <SalesAnalysis />,
    },
    {
      path: "/addProduct",
      element: <AddProduct />,
    },
    {
      path: "/Attendence",
      element: <Attendence />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default AppRoutes;
