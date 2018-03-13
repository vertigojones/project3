import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Drummers from "./components/Drummers";
import SingleDrummer from "./components/SingleDrummer";
import NewDrummerForm from "./components/NewDrummerForm";
import UpdateDrummer from "./components/UpdateDrummer";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hit that beat!</h1>

        <Router>
          <Switch>
            <Route exact path="/" component={Drummers} />
            <Route exact path="/:id" component={SingleDrummer} />
            {/* <Route exact path="/:id" component={UpdateDrummer} /> */}
            {/* <Route exact path="/:id" component={DeleteDrummer} /> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
