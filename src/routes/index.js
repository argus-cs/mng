import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import history from './history'

// import all routes here...
import Home from '../containers/Home'

export default props => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>
)