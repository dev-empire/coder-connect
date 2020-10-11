import Axios from 'axios'

export const GET_USER = 'chat-hub/get-user'
export const LOADING = 'chat-hub/loadingr'

// reducer
const INITIAL_STATE = {
  users: [],
  loading: false,
}

const Reducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        users: action.payload,
      }

    case LOADING:
      return {
        ...state,
        loading: true,
      }

    default:
      return state
  }
}

export default Reducer

// action

export const getUser = () => async dispatch => {
  try {
    const res = await Axios.get('http://localhost:4000/api/users')
    dispatch({
      type: GET_USER,
      payload: res.data,
    })
  } catch (error) {
    console.error(error)
  }
}
