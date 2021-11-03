import Announcement from "./components/Announcement";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter/Newsletter";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import { Fragment } from "react";
import { routes } from "./routes";
import { useSelector } from "react-redux";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
function App() {
  const user = useSelector((state) => state.user.currentUser);
  const routeComponents = routes.map(({ path, component }, key) => (
    <Route exact path={path} component={component} key={key} />
  ));

  return (
    <Router>
      <Announcement />
      <Navbar />
      <Switch>
        <Fragment>
          <ScrollToTop />
          {routeComponents}

          <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
          <Route path="/register">
            {user ? <Redirect to="/" /> : <Register />}
          </Route>
        </Fragment>
      </Switch>
      <Newsletter />
      <Footer />
    </Router>
  );
}

export default App;
