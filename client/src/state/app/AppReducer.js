import { SET_LOADING, GET_USERS } from '../TYPES'

export default (state, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        setLoading: false,
      }
    case SET_LOADING:
      return {
        ...state,
        setLoading: true,
      }

    default:
      return state
  }
}
