import { GET_ERRORS, CLEAR_ERRORS } from '../TYPES'

export default (state, action) => {
  switch (action) {
    case GET_ERRORS:
      return {
        ppayload: {
          msg: action.payload.msg,
          status: action.payload.status,
          id: action.payload.id,
        },
      }
    case CLEAR_ERRORS:
      return {
        msg: {},
        status: null,
        id: null,
      }

    default:
      return state
  }
}
