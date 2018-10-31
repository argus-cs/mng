import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

// import middlewares
import thunk from 'redux-thunk'
import promise from 'redux-promise'

import reducers from './ducks'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

// devtools
const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(thunk, promise, sagaMiddleware)(createStore)(reducers, devtools)

sagaMiddleware.run(sagas)

export default store