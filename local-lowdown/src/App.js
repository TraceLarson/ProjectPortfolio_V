import React, {Component} from 'react'
import {HashRouter, Route} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Results from './pages/Results'

class App extends Component {
  render() {
    return (
        <HashRouter>
          <div>
            <Route exact strict path={'/'} component={Home} />
            <Route  path={'/results'} component={Results} />
            <Route  path={'/about'} component={About} />
          </div>
        </HashRouter>
    )
  }
}

export default App
