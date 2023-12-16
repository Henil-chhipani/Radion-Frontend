// Routes.js
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import User_id from "./pages/User_id";

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
      element:<Register/>
    },
    {
      path: "/user",
      element:<User_id/>
    },
    
    

  ]);
  return <RouterProvider router={router} />;
}

export default AppRoutes;
