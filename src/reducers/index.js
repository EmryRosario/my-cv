/*
{
  educations: []
  skills: []
  experiences: []
}
*/

import { combineReducers } from 'redux'
import { ADD_EDUCATION, ADD_SKILL, ADD_EXPERIENCE } from '../actions'

function education (state={}, action) {
  switch (action.type) {
  case ADD_EDUCATION:
    return Object.assign({}, state, {
      title: action.payload.title,
      place: action.payload.place
    })
  default:
    return state
  }
}

function educations (state=[], action) {
  switch (action.type) {
  case ADD_EDUCATION:
    return [
      ...state, education(undefined, action)
    ]
  default:
    return state
  }
}

function skill (state={}, action) {
  switch (action.type) {
  case ADD_SKILL:
    return Object.assign({}, state, {
      title: action.payload.title,
      place: action.payload.place
    })
  default:
    return state
  }
}

function skills (state=[], action) {
  switch (action.type) {
  case ADD_SKILL:
    return [
      ...state, skill(undefined, action)
    ]
  default:
    return state
  }
}

function experience (state={}, action) {
  switch (action.type) {
  case ADD_EXPERIENCE:
    return Object.assign({}, state, {
      title: action.payload.title,
      place: action.payload.place
    })
  default:
    return state
  }
}

function experiences (state=[], action) {
  switch (action.type) {
  case ADD_EXPERIENCE:
    return [
      ...state, experience(undefined, action)
    ]
  default:
    return state
  }
}

export default combineReducers({
  educations,
  skills,
  experiences
})
