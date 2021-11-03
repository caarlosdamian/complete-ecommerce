import Cart from "../pages/Cart/Cart";
import Home from "../pages/Home";
import Product from "../pages/Product/Product";
import ProductList from "../pages/ProductList/ProductList";
import Success from "../pages/Success/Success";
export const routes = [
  {
    path: "/",
    component: Home,
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
