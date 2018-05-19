import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Results from './pages/Results'

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Route exact path={'/'} component={Home} />
            <Route  path={'/results'} component={Results} />
            <Route  path={'/about'} component={About} />
          </div>
        </Router>
    )
  }
}

export default App
