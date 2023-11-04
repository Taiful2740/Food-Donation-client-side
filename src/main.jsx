import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import Root from "./Root";
import Home from "./Components/Header/Home";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import AboutUs from "./Components/Pages/AboutUs";
import Register from "./Components/LoginRegister/Register";
import LogIn from "./Components/LoginRegister/LogIn";
import Profile from "./Components/Header/Profile";
import Reebok from "./Components/Brand/Reebok";
import Adidas from "./Components/Brand/Adidas";
import Puma from "./Components/Brand/Puma";
import Nike from "./Components/Brand/Nike";
import Gucci from "./Components/Brand/Gucci";
import Zara from "./Components/Brand/Zara";
import UpdateProduct from "./Components/Pages/UpdateProduct";
import Details from "./Components/Pages/Details";
import MyCart from "./Components/Header/MyCart";
import PrivateRoute from "./Components/Header/PrivateRoute";
import AddFood from "./Components/Pages/AddFood.jsx";
import ManageMyFood from "./Components/Pages/ManageMyFood.jsx";
import MyFoodRequest from "./Components/Pages/MyFoodRequest.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/addFood",
        element: (
          <PrivateRoute>
            <AddFood />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-cart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>,
          </PrivateRoute>
        ),
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/manageMyFoods",
        element: <ManageMyFood />,
      },
      {
        path: "/myFoodRequest",
        element: <MyFoodRequest />,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },

      {
        path: "/updateProduct/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) =>
          fetch(
            `https://taiful-taiful-islams-projects.vercel.app/product/${params.id}`
          ),
      },
      {
        path: "/mycart",
        element: <MyCart></MyCart>,
        loader: () =>
          fetch("https://taiful-taiful-islams-projects.vercel.app/cart"),
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(
            `https://taiful-taiful-islams-projects.vercel.app/product/${params.id}`
          ),
      },
      {
        path: "/reebok",
        element: (
          <PrivateRoute>
            <Reebok></Reebok>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://taiful-taiful-islams-projects.vercel.app/product"),
      },
      {
        path: "/adidas",
        element: (
          <PrivateRoute>
            <Adidas></Adidas>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://taiful-taiful-islams-projects.vercel.app/product"),
      },

      {
        path: "/puma",
        element: (
          <PrivateRoute>
            <Puma></Puma>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://taiful-taiful-islams-projects.vercel.app/product"),
      },
      {
        path: "/nike",
        element: (
          <PrivateRoute>
            <Nike></Nike>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://taiful-taiful-islams-projects.vercel.app/product"),
      },
      {
        path: "/gucci",
        element: (
          <PrivateRoute>
            <Gucci></Gucci>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://taiful-taiful-islams-projects.vercel.app/product"),
      },
      {
        path: "/zara",
        element: (
          <PrivateRoute>
            <Zara></Zara>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://taiful-taiful-islams-projects.vercel.app/product"),
      },
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
