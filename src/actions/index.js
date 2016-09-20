import fetch from 'isomorphic-fetch'

export const ADD_EDUCATION = 'ADD_EDUCATION'
export const ADD_SKILL = 'ADD_SKILL'
export const REQUEST_EDUCATIONS = 'REQUEST_EDUCATIONS'
export const REQUEST_EDUCATIONS_SUCCESS = 'REQUEST_EDUCATIONS_SUCCESS'
export const REQUEST_EDUCATIONS_FAILURE = 'REQUEST_EDUCATIONS_FAILURE'
export const REQUEST_SKILLS = 'REQUEST_SKILLS'
export const REQUEST_SKILLS_SUCCESS = 'REQUEST_SKILLS_SUCCESS'
export const REQUEST_SKILLS_FAILURE = 'REQUEST_SKILLS_FAILURE'


export function addEducation (title, place) {
  return {
    type: ADD_EDUCATION,
    payload: { title, place }
  }
}

export function addSkill (title, level) {
  return {
    type: ADD_SKILL,
    payload: { title, level }
  }
}

export function requestEducations () {
  return {
    type: REQUEST_EDUCATIONS
  }
}

export function requestEducationsSuccess (educations) {
  return {
    type: REQUEST_EDUCATIONS_SUCCESS,
    payload: { educations }
  }
}

export function requestEducationsFailure (err) {
  return {
    type: REQUEST_EDUCATIONS_FAILURE,
    payload: { err }
  }
}

export function requestSkills () {
  return {
    type: REQUEST_SKILLS
  }
}

export function requestSkillsSuccess (educations) {
  return {
    type: REQUEST_SKILLS_SUCCESS,
    payload: { educations }
  }
}

export function requestSkillsFailure (err) {
  return {
    type: REQUEST_SKILLS_FAILURE,
    payload: { err }
  }
}

export function fetchEducations () {
  return dispatch => {
    dispatch(requestEducations)
    return fetch('/api/educations')
      .then(response => response.json())
      .then(educations => dispatch(requestSkillsSuccess(educations)))
      .catch(e => dispatch(requestEducationsFailure(e)))
  }
}


export async function fetchsSkills () {
  return dispatch => {
    try {
      dispatch(requestSkills())
      var skills = await fetch('/api/')
      dispatch(requestSkillsSuccess(skills))
    } catch (e) {
      dispatch(requestSkillsFailure(e))
    }
  }
}
