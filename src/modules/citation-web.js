import { CALL_API } from 'redux-api-middleware'
import { combineReducers } from 'redux'

const FETCH_WEB_REQUEST = 'FETCH_WEB_REQUEST'
const FETCH_WEB_SUCCESS = 'FETCH_WEB_SUCCESS'
const FETCH_WEB_FAILURE = 'FETCH_WEB_FAILURE'
const SELECT_PUBLICATION = 'SELECT_PUBLICATION'
const RESET_SELECTED_PUBLICATION = 'RESET_SELECTED_PUBLICATION'
const CHANGE_DEPTH = 'CHANGE_DEPTH'


// Reducers
const publicationSelection = (state = '', action) => {
  switch(action.type) {
    case SELECT_PUBLICATION:
      return action.payload
    case RESET_SELECTED_PUBLICATION:
      return ''
    default:
      return state
  }
}

const apiReducerInitialState = {
  entities: {},
  loading: true,
  error: false
}

const apiReducer = (state = apiReducerInitialState, action) => {
  switch (action.type) {
    case FETCH_WEB_REQUEST:
      return {
        ...state,
        loading: true
      }

    case FETCH_WEB_SUCCESS:
      return {
      ...state,
        entities: action.payload.result,
        loading: false
      }

    case FETCH_WEB_FAILURE:
      return {
        ...state,
        error: true
      }

    default:
      return state
  }
}

const depthReducerInitialState = {
  depth: 1
}

const depthReducer = (state = depthReducerInitialState, action) => {
  switch (action.type) {
    case CHANGE_DEPTH:
      return {
        ...state,
        depth: action.payload
      }

    default:
      return state

  }
}

export default combineReducers({
  selected: publicationSelection,
  apiReducer,
  depthReducer
})

// Selectors
export const selectedPublication = (entities, selection) => {
  if (selection === '') {
    return {}
  }

  return entities[selection]
}

// Actions
export const fetchCitationWeb = () => ({
  [CALL_API]: {
    endpoint: 'http://localhost:5000/task4',
    method: 'GET',
    types: [FETCH_WEB_REQUEST, FETCH_WEB_SUCCESS, FETCH_WEB_FAILURE]
  }
})

export const selectPublication = (publicationId) => ({
  type: SELECT_PUBLICATION,
  payload: publicationId
})

export const resetSelectedPublication = () => ({
  type: RESET_SELECTED_PUBLICATION
})

export const changeDepth = (depth) => ({
  type: CHANGE_DEPTH,
  payload: depth
})
