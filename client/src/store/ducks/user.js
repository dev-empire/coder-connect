import Axios from 'axios'
// import cookie from 'js-cookie'
import { LOGIN_USER, GET_ALL_USERS, CREATE_ERROR, CREATE_USER } from '../constants'

const initialState = {
  users: [],
  user: null,
  isAuthenticated: false,
  error: null,
  loading: false,
  //   token: cookie.get('auth-token'),
}

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      }

    case CREATE_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }

    case CREATE_USER:
      return {
        ...state,
        currUser: action.payload,
        loading: false,
      }

    case LOGIN_USER:
      console.log(action.payload)
      return {
        ...state,
        currUser: action.payload,
        isAuthenticated: true,
        loading: false,
      }

    default:
      return state
  }
}

export default Reducer

const USER_URI = 'http://localhost:4100/api/users'

export const getAllUsers = () => async dispatch => {
  try {
    await Axios.get(USER_URI).then(users => {
      dispatch({ type: GET_ALL_USERS, payload: users.data.response })
    })
  } catch (error) {
    console.log('Error', error)
    dispatch({ type: CREATE_ERROR, payload: error.response.data.response })
  }
}

export const loginUser = data => async dispatch => {
  try {
    const res = await (
      await Axios.post('http://localhost:4100/api/user/login', data)
    ).data
    console.log('data', res)
    dispatch({ type: LOGIN_USER, payload: res.response.user })
  } catch (error) {
    dispatch({ type: CREATE_ERROR, payload: error.response.data.response })
  }
}
