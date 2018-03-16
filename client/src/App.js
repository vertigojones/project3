import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { injectGlobal } from "styled-components";

import Drummers from "./components/drummers/Drummers";
import SingleDrummer from "./components/drummers/SingleDrummer";

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Sedgwick+Ave+Display');
@import url('https://fonts.googleapis.com/css?family=Swanky+and+Moo+Moo');
@import url('https://fonts.googleapis.com/css?family=Cousine');

button {
  padding: 10px;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
}

button:hover {
    background-color: Black;
    color: white;
}
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
