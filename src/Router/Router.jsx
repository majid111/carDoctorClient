import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/Home/AboutUs";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Root from "../Layout/Root/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/aboutUS",
        element: <AboutUs/>,
      },
      {
        path: "/services",
        element: <Home/>,
      },
      {
        path: "/blog",
        element: <Home/>,
      },
      {
        path: "/contact",
        element: <Home/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/Register",
        element: <Register/>,
      },
    ],
  },
]);

export default router;
