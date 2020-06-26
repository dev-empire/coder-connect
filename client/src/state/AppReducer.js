import { SET_LOADING, GET_USERS } from './TYPES'

export default (state, action) => {
  switch (action.type) {
    case GET_USERS:
      console.log('heyyo')
      return {
        ...state,
        users: action.payload,
      }
    case SET_LOADING:
      return {
        setLoading: true,
      }

    default:
      return state
  }
}
