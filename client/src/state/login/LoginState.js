import React from 'react'
import LoginReducer from './LoginReducer'
import LoginContext from './loginContext'
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

const LoginState = () => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null,
  }

  const [state, dispatch] = useReducer(LoginReducer, initialState)

  const userLoaded = () => {
    isLoading()
    dispatch({
      type: USER_LOADED,
      payload: {
        isAuthenticated,
        user,
      },
    })
  }
  const isLoading = () => dispatch({ type: SET_LOADING })

  const value = {
    token: state.token,
    isAuthenticated: state.isAuthenticated,
    isLoading: state.isLoading,
    user: state.user,
    isLoading,
    userLoaded,
  }

  return <LoginContext.Provider value={value}></LoginContext.Provider>
}
