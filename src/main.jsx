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
import Details from "./Components/Pages/Details";
import PrivateRoute from "./Components/Header/PrivateRoute";
import AddFood from "./Components/Pages/AddFood.jsx";
import ManageMyFood from "./Components/Pages/ManageMyFood.jsx";
import MyFoodRequest from "./Components/Pages/MyFoodRequest.jsx";
import AvailableFoods from "./Components/Header/AvailableFoods.jsx";
import ContactUs from "./Components/Footer/ContactUs.jsx";
import UpdateFood from "./Components/Pages/UpdateFood.jsx";

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
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/details/:id",
        element: <Details />,
        loader: () => fetch("https://taiful.vercel.app/food"),
      },
      {
        path: "/manageMyFoods",
        element: <ManageMyFood />,
        loader: () => fetch("https://taiful.vercel.app/food"),
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateFood />,
        loader: ({ params }) =>
          fetch(`https://taiful.vercel.app/food/${params.id}`),
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
        path: "/availableFoods",
        element: <AvailableFoods />,
        loader: () => fetch("https://taiful.vercel.app/food"),
      },

      {
        path: "/contactUs",
        element: <ContactUs />,
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
