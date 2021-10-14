import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import GlobalStyles from "./utils/GlobalStyles";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import OurWork from "./pages/OurWork";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/work">
          <OurWork />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
