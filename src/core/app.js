import React from 'react'
import { Provider } from 'react-redux'
import Router from '../routes'

const App = props => (
  <Provider store={props.store}>
    <Router />
  </Provider>
)

export default App;