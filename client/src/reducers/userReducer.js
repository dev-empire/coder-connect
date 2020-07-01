import { GET_USERS } from '../actions/types'

const initialState = {
  // users: [
  //   { name: 'John', id: Math.floor(Math.random() * 1000000) },
  //   { name: 'Alex', id: Math.floor(Math.random() * 1000000) },
  //   { name: 'Han', id: Math.floor(Math.random() * 1000000) },
  // ],
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      }
    default:
      return state
  }
}
