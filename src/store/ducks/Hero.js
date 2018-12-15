/**
 * Types
 */
export const Types = {
  "FETCH_HERO": "hero/FETCH_HERO",
  "SUCCESS_HERO": "hero/SUCCESS_HERO",
  "FAILURE_HERO": "hero/FAILURE_HERO"
}

/**
 * Reducers
 */
const INITIAL_STATE = {
  isFetching: false,
  err: null,
  data: []
}

export default function hero(state = INITIAL_STATE, action) {
  switch(action.type) {

    case Types.FETCH_HERO:
      return {
        ...state,
        isFetching: true,
      }
    
    case Types.SUCCESS_HERO:
      return {
        ...state,
        isFetching: false,
        err: null,
        data: action.payload
      }
    
    case Types.FAILURE_HERO: 
      return {
        ...state,
        isFetching: false,
        err: action.error,
        data: []
      }

    default:
      return state
  }
}

/**
 * Actions
 */
export const Creators = {
  heroFetching: () => ({
    type: Types.FETCH_HERO
  }),

  heroSuccess: (data) => ({
    type: Types.SUCCESS_HERO,
    payload: data
  }),

  heroFailure: (err) => ({
    type: Types.FAILURE_HERO,
    error: err
  })
}