import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Drummers from './components/Drummers'
//import SingleCreature from './components/SingleCreature'

class App extends Component {
  render () {
    return (
      <div>
      <h1>Hit that beat!</h1>

      <Router>
        
          <Switch>
            <Route exact path="/" component={Drummers}/>
          </Switch>
        
      </Router>
      </div>
    )
  }
}

export default App
