import Axios from 'axios'

export const SET = 'chat-hub/SET'
export const CLEAR = 'chat-hub/CLEAR'

// reducer
const INITIAL_STATE = null

const Reducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case SET:
      return {
        users: action.payload,
      }

    case CLEAR:
      return null

    default:
      return state
  }
}

export default Reducer

// action

export const setSession = session => {
  return { session, type: SET }
}
export const clearSession = () => {
  return { type: CLEAR }
}

// export const getUser = () => async dispatch => {
//   try {
//     const res = await Axios.get('http://localhost:4000/api/user/:id')
//     dispatch({
//       type: GET_USER,
//       payload: res.data,
//     })
//   } catch (error) {
//     console.error(error)
//   }
// }
