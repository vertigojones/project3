import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { injectGlobal } from "styled-components";

import Drummers from "./components/drummers/Drummers";
import SingleDrummer from "./components/drummers/SingleDrummer";
import Gigs from "./components/gigs/Gigs";

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Sedgwick+Ave+Display');
@import url('https://fonts.googleapis.com/css?family=Swanky+and+Moo+Moo');
@import url('https://fonts.googleapis.com/css?family=Cousine');
`;

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
