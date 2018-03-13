import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Drummers from "./components/Drummers";
import SingleDrummer from "./components/SingleDrummer";
import NewDrummerForm from "./components/NewDrummerForm";
import UpdateDrummer from "./components/UpdateDrummer";
import DeleteDrummer from "./components/DeleteDrummer";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hit that beat!</h1>

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
