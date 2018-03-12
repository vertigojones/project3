import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Drummers from './components/Drummers'
//import SingleCreature from './components/SingleCreature'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Drummers}/>
            {/* <Route path="/:id" component={SingleCreature}/> */}
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
