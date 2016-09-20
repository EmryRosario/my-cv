import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from '../reducers'
import App from './App'
import { fetchEducations, fetchSkills } from '../actions'

const store = createStore(reducers)

const Root = () => (
  <Provider store={store}>
    <App/>
  </Provider>
)

store.dispatch(fetchEducations())
store.dispatch(fetchSkills())

export default  Root
