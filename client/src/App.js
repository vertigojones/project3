import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Drummers from "./components/drummers/Drummers";
import SingleDrummer from "./components/drummers/SingleDrummer";
import Gigs from "./components/gigs/Gigs";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Drummers} />
            <Route exact path="/:id" component={SingleDrummer} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
