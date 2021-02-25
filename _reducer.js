import { createStore, applyMiddleware } from 'redux'

let store = createStore(
  rootReducer,
  applyMiddleware(logger, timeoutScheduler)
)
