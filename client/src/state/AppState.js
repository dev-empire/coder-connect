import React from 'react'
import Context from './appContext'
import AppReducer from './AppReducer'

// import types
import { SET_LOADING, USERS } from './TYPES'

const AppState = (props) => {
  const { children } = props

  const initialState = {
    users: [
      { name: 'John', id: 11 },
      { name: 'Sam', id: 342 },
      { name: ' Carly', id: 32 },
    ],
    loading: false,
  }

  const [state, dispatch] = React.useReducer(AppReducer, initialState)

  const getUsers = () => {
    dispatch({
      type: USERS,
    })
  }

  const setLoading = () => {
    dispatch({ type: SET_LOADING })
  }

  const value = {
    users: state.users,
    getUsers,
    setLoading,
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default AppState
