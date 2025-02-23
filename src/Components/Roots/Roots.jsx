import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import ErrorPages from "../Error/ErrorPages";
import Home from "../Home/Home";
import Products from "../Products/Products";
import Statistics from "../Statistics/Statistics";
import Dashboard from "../Dashboard/Dashboard";
import CategoryCard from "../CategoryCard/CategoryCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>,
    errorElement: <ErrorPages></ErrorPages>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../category.json"),
        children: [
          {
            path: "/",
            element: <CategoryCard></CategoryCard>,
            loader: () => fetch("../products.json"),
          },
          {
            path: "/category/:category",
            element: <CategoryCard></CategoryCard>,
            loader: () => fetch("../products.json"),
          },
        ],
      },
      {
        path: "/products",
        element: <Products></Products>,
        loader: () => fetch("../products.json"),
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

export default router;
