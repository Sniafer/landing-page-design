import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import GlobalStyles from "./utils/GlobalStyles";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import OurWork from "./pages/OurWork";
import ItemPage from "./pages/ItemPage";
import NoMatch from "./components/NoMatch";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route exact path="/work/:id">
          <ItemPage />
        </Route>
        <Route exact path="/work">
          <OurWork />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
