import Cart from "../pages/Cart/Cart";
import Home from "../pages/Home";
import Login from "../pages/Login/Login";
import Product from "../pages/Product/Product";
import ProductList from "../pages/ProductList/ProductList";
import Register from "../pages/Register/Register";
import Success from "../pages/Success/Success";
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
    path: "/products/:category",
    component: ProductList,
  },
  {
    path: "/product/:id",
    component: Product,
  },
  {
    path: "/checkout",
    component: Cart,
  },
  {
    path: "/success",
    component: Success,
  },
];
