import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./views/NavBar/NavBar";
import ShortFcstPage from "./views/ShortFcstPage/ShortFcstPage";
import VilageFcstPage from "./views/VilageFcstPage/VilageFcstPage";
import NoMatch from "./views/NoMatch/NoMatch";
import Footer from "./views/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div>
          <Switch>
            <Route exact path="/" component={ShortFcstPage} />
            <Route path="/vilage-fcst" component={VilageFcstPage} />
            <Route component={NoMatch} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
