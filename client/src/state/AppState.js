import React from 'react'
import axios from 'axios'
import Context from './appContext'
import AppReducer from './AppReducer'

// import types
import { SET_LOADING, GET_USERS } from './TYPES'

const AppState = props => {
  const { children } = props

  const initialState = {
    users: [],
    loading: false,
  }

  const [state, dispatch] = React.useReducer(AppReducer, initialState)

  const getUsers = async () => {
    setLoading()
    const res = await axios.get('http://localhost:4000/users')
    dispatch({
      type: GET_USERS,
      payload: res.data,
    })
  }

  const setLoading = () => {
    dispatch({ type: SET_LOADING })
  }

  const value = {
    users: state.users,
    loading: state.loading,
    getUsers,
    setLoading,
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default AppState
