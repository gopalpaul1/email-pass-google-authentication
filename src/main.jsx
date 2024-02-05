import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root.jsx";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Login/Login.jsx";
import SignUp from "./components/SingUp/SignUp.jsx";
import AuthProvider from "./components/AuthProvider/AuthProvider.jsx";
import Orders from "./components/Orders/Orders.jsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";
import Profile from "./components/Profile/Profile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path:'orders',
        element: <PrivateRoute><Orders></Orders></PrivateRoute>
      },
      {
        path:'profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
