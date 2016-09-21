import fetch from 'isomorphic-fetch'

export const ADD_EDUCATION = 'ADD_EDUCATION'
export const ADD_SKILL = 'ADD_SKILL'
export const REQUEST_EDUCATIONS = 'REQUEST_EDUCATIONS'
export const REQUEST_EDUCATIONS_SUCCESS = 'REQUEST_EDUCATIONS_SUCCESS'
export const REQUEST_EDUCATIONS_FAILURE = 'REQUEST_EDUCATIONS_FAILURE'
export const REQUEST_SKILLS = 'REQUEST_SKILLS'
export const REQUEST_SKILLS_SUCCESS = 'REQUEST_SKILLS_SUCCESS'
export const REQUEST_SKILLS_FAILURE = 'REQUEST_SKILLS_FAILURE'
export const REQUEST_EXPERIENCES = 'REQUEST_EXPERIENCES'
export const REQUEST_EXPERIENCES_SUCCESS = 'REQUEST_EXPERIENCES_SUCCESS'
export const REQUEST_EXPERIENCES_FAILURE = 'REQUEST_EXPERIENCES_FAILURE'

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

export function requestSkillsSuccess (skills) {
  return {
    type: REQUEST_SKILLS_SUCCESS,
    payload: { skills }
  }
}

export function requestSkillsFailure (err) {
  return {
    type: REQUEST_SKILLS_FAILURE,
    payload: { err }
  }
}

export function requestExperiences () {
  return {
    type: REQUEST_EXPERIENCES
  }
}

export function requestExperiencesSuccess (experiences) {
  return {
    type: REQUEST_EXPERIENCES_SUCCESS,
    payload: { experiences }
  }
}

export function requestExperiencesFailure (err) {
  return {
    type: REQUEST_EXPERIENCES_FAILURE,
    payload: { err }
  }
}

function api (search) {
  if (search === 'educations') {
    let educations = [ { title: 'Ingenieria', place: 'Unapec' }, { title: 'Frontend', place: 'Platzi' }, { title: 'High School', place: 'Espiritu Santo' } ]
    return Promise.resolve(educations)
  } else if (search === 'skills') {
    let skills = [ { title: 'HTML5', level: 100 }, { title: 'CSS', level: 100 }, { title: 'JavaScript', level: 100 } ]
    return Promise.resolve(skills)
  }
}

export function fetchEducations () {
  return async function (dispatch) {
    try {
      dispatch(requestEducations())
      let educations = await api('educations')
      dispatch(requestEducationsSuccess(educations))
    } catch (e) {
      dispatch(requestEducationsFailure())
    }
  }
}

export function fetchSkills () {
  return async dispatch => {
    try {
      dispatch(requestSkills())
      let skills = await api('skills')
      dispatch(requestSkillsSuccess(skills))
    } catch (e) {
      dispatch(requestSkillsFailure(e))
    }
  }
}

export async function fetchExperiences () {
  return async dispatch => {
    try {
      dispatch(requestExperiences())
      let experiences = await fetch('/api/').then(response => response.json())
      dispatch(requestExperiencesSuccess(experiences))
    } catch (e) {
      dispatch(requestExperiencesFailure(e))
    }
  }
}
