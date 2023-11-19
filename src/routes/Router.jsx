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
import Dashboard from "../layout/Dashboard";
import Cart from "../pages/Cart";
import Privateroute from "./Privateroute";
import Allusers from "../pages/Allusers";

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
          element: <Orders></Orders>
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
    {
      path: '/dashboard',
      element: <Privateroute><Dashboard></Dashboard></Privateroute>,
      children: [
        {
          path: '/dashboard/cart',
          element: <Cart></Cart>
        },
        {
          path: '/dashboard/allusers',
          element: <Allusers></Allusers>
        }
      ]
    }
  ]);

export default router;