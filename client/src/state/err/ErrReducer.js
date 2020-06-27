import { GET_ERRORS, CLEAR_ERRORS } from '../TYPES'

export default (action, type) => {
  switch (key) {
    case GET_ERRORS:
      return {
        ...state,
        payload,
      }
    case CLEAR_ERRORS:
      return {
        ...state,
      }

    default:
      return state
  }
}
