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
import Additems from "../additems/Additems";
import Adminroute from "./Adminroute";
import Manageitems from "../pages/Manageitems";
import Updateitem from "../pages/Updateitem";

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
          element: <Adminroute><Allusers></Allusers></Adminroute>
        },
        {
          path: '/dashboard/additems',
          element: <Adminroute><Additems></Additems></Adminroute>
        },
        {
          path: '/dashboard/manageitems',
          element: <Adminroute><Manageitems></Manageitems></Adminroute>
        },
        {
          path: '/dashboard/updateitem/:id',
          element: <Adminroute><Updateitem></Updateitem></Adminroute>,
          loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
        }
      ]
    }
  ]);

export default router;