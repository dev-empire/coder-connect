import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCES,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADING,
} from '../TYPES'

export default (state, action) => {
  switch (action) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      }
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      }
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      }

    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT_SUCCES:
    case REGISTER_FAIL:
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      }

    default:
      return state
  }
}
