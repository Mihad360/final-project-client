import {
    createBrowserRouter
  } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../home/Home";
import Menu from "../menu/Menu";
import Orders from "../order/Orders";
import Contact from "../contact/Contact";
import Login from "../authentication/Login";
import Signup from "../authentication/Signup";
import Privateroute from "./Privateroute";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/menu',
          element: <Menu></Menu>,
        },
        {
          path: '/shop',
          element: <Privateroute><Orders></Orders></Privateroute>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <Signup></Signup>
        }
      ]
    },
  ]);

export default router;