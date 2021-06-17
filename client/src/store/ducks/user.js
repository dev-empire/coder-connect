import Axios from 'axios'
import { LOGIN_USER, GET_ALL_USERS } from './contants'

const initialState = {
  users: [],
  name: null,
  isAuthenticated: false,
  //   token: cookie.get('auth-token'),
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        users: action.payload,
      }

    case LOGIN_USER:
      console.log(action.payload)
      return {
        ...state,
        name: action.payload,
      }

    default:
      return state
  }
}

const USER_URI = 'http://localhost:4100/api/users'

export const getAllUsers = () => async dispatch => {
  await Axios.get(USER_URI).then(users => {
    console.log(users.data)
    dispatch({ type: GET_ALL_USERS, payload: users.data })
  })
}

export const loginUser = data => async dispatch => {
  try {
    const res = await (
      await Axios.post('http://localhost:4100/api/user/login', data)
    ).data
    console.log(res)
    dispatch({ type: LOGIN_USER, payload: res })
  } catch (error) {
    console.log(error)
  }
}

export default userReducer
