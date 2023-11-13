import {
    createBrowserRouter
  } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../home/Home";
import Menu from "../menu/Menu";
import Orders from "../order/Orders";

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
        }
      ]
    },
  ]);

export default router;