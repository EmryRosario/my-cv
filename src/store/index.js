import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers'
import { fetchEducations, fetchSkills } from '../actions'
import createLogger from 'redux-logger'

const logger = createLogger()
const store = createStore(reducers, applyMiddleware(
  logger,
  thunk,
))

store.dispatch(fetchEducations())
store.dispatch(fetchSkills())

export default store
