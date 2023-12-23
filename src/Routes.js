// Routes.js
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Userid from "./pages/User_id";
import Admin from "./pages/Admin";
import Salesexc from "./pages/Salesexc";
import AddEmployee from "./pages/AddEmployee";

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
      path: "/Salesteam",
      element: <Salesexc />,
    },
    {
      path:"/addEmployee",
      element: <AddEmployee/>
    }
  ]);
  return <RouterProvider router={router} />;
}

export default AppRoutes;
