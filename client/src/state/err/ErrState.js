import React, { useReducer } from 'react'
import ErrReducer from './ErrReducer'
import ErrContext from './errContext'
import { GET_ERRORS, CLEAR_ERRORS } from '../TYPES'

const ErrState = props => {
  const initialState = {
    msg: {},
    status: null,
    id: null,
  }

  const [state, dispatch] = useReducer(ErrReducer, initialState)

  const getErrors = (msg, status, id = null) => {
    dispatch({
      type: GET_ERRORS,
      payload: { msg, status, id },
    })
  }

  const clearErrors = () => {
    dispatch({
      type: CLEAR_ERRORS,
    })
  }

  const value = {
    msg: state.value,
    status: state.status,
    id: state.id,
    getErrors,
    clearErrors,
  }

  return <ErrContext.Provider value={value}>{props.children}</ErrContext.Provider>
}

export default ErrState
