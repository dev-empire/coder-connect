import axios from 'axios'

import { GET_USERS } from './types'

export const getItems = async () => {
  return axios.get('http://localhost:4000/users').then(
    res =>
      dispatch({
        type: GET_USERS,
        payload: res.data,
      }).catch(err => console.error(err)),
    console.log(res.data),
  )
}
