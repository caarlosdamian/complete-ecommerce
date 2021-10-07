import Announcement from "./components/Announcement";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter/Newsletter";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import { Fragment } from "react";
import { routes } from "./routes";
function App() {
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
        </Fragment>
      </Switch>
      <Newsletter />
      <Footer />
    </Router>
  );
}

export default App;
