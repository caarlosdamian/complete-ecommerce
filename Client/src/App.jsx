import Announcement from "./components/Announcement";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter/Newsletter";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Product from "./pages/Product/Product";
import ProductList from "./pages/ProductList/ProductList";
import Register from "./pages/Register/Register";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import { Fragment } from "react";
function App() {
  return (
    <Router>
      <Announcement />
      <Navbar />
      <Switch>
        <Fragment>
          <ScrollToTop />
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          <Route path="/products" exact>
            <ProductList />
          </Route>
          <Route path="/products/1" exact>
            <Product />
          </Route>
          <Route path="/checkout" exact>
            <Cart />
          </Route>
        </Fragment>
      </Switch>
      <Newsletter />
      <Footer />
    </Router>
  );
}

export default App;
