import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducers from '../reducers'
import App from './App'
import { fetchEducations, fetchSkills } from '../actions'
import createLogger from 'redux-logger'

const logger = createLogger()
const store = createStore(reducers, applyMiddleware(
  logger,
  thunk
))

const Root = () => (
  <Provider store={store}>
    <App/>
  </Provider>
)

store.dispatch(fetchEducations())
store.dispatch(fetchSkills())

export default  Root
