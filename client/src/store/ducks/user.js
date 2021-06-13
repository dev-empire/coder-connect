import Axios from 'axios'
import { GET_ALL_USERS } from './contants'

const initialState = {
  users: [],
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        users: action.payload,
      }
    default:
      return state
  }
}

const USER_URI = 'http://localhost:4100/api/users'

export const getAllUsers = () => async dispatch => {
  await Axios.get(USER_URI).then(users => {
    dispatch({ type: GET_ALL_USERS, payload: users.data })
  })
}

// export const createUser = () => dispatch => {
//   return async function post() {
//     const user = Axios.post(USER_URI)
//     dispatch({ type: CREATE_USER, payload: user })
//   }
// }

export default userReducer
