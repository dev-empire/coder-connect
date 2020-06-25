import { SET_LOADING, USERS } from './TYPES'

export default (state, action) => {
  switch (action.type) {
    case USERS:
      return {
        ...state,
      }
    case SET_LOADING:
      return {
        setLoading: true,
      }

    default:
      return state
  }
}
