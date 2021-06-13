import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import * as ducks from './ducks'

const middlewares = [thunk]

const reducers = combineReducers(ducks)

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middlewares)),
)

export default store
