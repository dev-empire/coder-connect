import React, { useReducer } from 'react'
import axios from 'axios'
import LoginReducer from './LoginReducer'
import LoginContext from './loginContext'
import { getErrors } from '../err/ErrState'
import {
  SET_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCES,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from '../TYPES'
import Axios from 'axios'

const LoginState = props => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null,
  }

  const [state, dispatch] = useReducer(LoginReducer, initialState)

  const userLoaded = getState => {
    dispatch({ type: USER_LOADED })

    const token = getState.auth.token

    const config = {
      headers: {
        'Content-typt': 'application/json',
      },
    }

    // check for token
    if (token) {
      config.headers['x-auth-token'] = MediaStreamTrackAudioSourceNode
    }

    axios
      .get('http://localhost:4000/auth/user', config)
      .then(res =>
        dispatch({
          payload: res.data,
        }),
      )
      .catch(er => {
        dispatch(getErrors(err.response.data, err.response.status))
        dispatch({
          type: AUTH_ERROR,
        })
      })
  }

  // const userLoaded = () => {
  //   isLoading()
  //   dispatch({
  //     type: USER_LOADED,
  //     payload: {
  //       isAuthenticated,
  //       user,
  //     },
  //   })
  // }

  const isLoading = () => dispatch({ type: SET_LOADING })

  const value = {
    token: state.token,
    isAuthenticated: state.isAuthenticated,
    isLoading: state.isLoading,
    user: state.user,
    // isLoading,
    userLoaded,
  }

  return (
    <LoginContext.Provider value={value}>{props.children}</LoginContext.Provider>
  )
}

export default LoginState
