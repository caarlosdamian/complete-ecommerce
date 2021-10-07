import Cart from "../pages/Cart/Cart";
import Home from "../pages/Home";
import Login from "../pages/Login/Login";
import Product from "../pages/Product/Product";
import ProductList from "../pages/ProductList/ProductList";
import Register from "../pages/Register/Register";
export const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/products",
    component: ProductList,
  },
  {
    path: "/products/:id",
    component: Product,
  },
  {
    path: "/checkout",
    component: Cart,
  },
];
