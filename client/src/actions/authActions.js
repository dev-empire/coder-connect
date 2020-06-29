import axios from 'axios'
import { returnErrors } from './errorActions'

import {
  USER_LOADING,
  AUTH_ERROR,
  GET_ERRORS,
  CLEAR_ERRORS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT_SUCCESS,
  USER_LOADED,
} from './types'

export const loadUser = () => (dispath, getState) => {
  dispath({ type: USER_LOADING })

  // get token
  const token = getState.auth.token

  // set headers
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  }

  // if token
  if (token) {
    config.headers['x-auth-token'] = token
  }

  axios
    .get('/auth/user', config)
    .then(res => dispath({ type: USER_LOADED, payload: res.data }))
    .catch(err => {
      dispath(returnErrors(err.response.msg, err.response.status))
      dispath({ type: AUTH_ERROR })
    })
}
