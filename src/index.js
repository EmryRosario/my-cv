import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'
import 'babel-polyfill'

const app = document.getElementById('App')

render(<Root/>, app)
