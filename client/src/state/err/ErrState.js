import React, { useReducer } from 'react'
import ErrReducer from './ErrReducer'
import ErrContext from './errContext'
import { GET_ERRORS, CLEAR_ERRORS } from '../TYPES'

const ErrState = props => {
  const { children } = props
  const initialState = {
    msg: {},
    status: null,
    id: null,
  }

  const [state, dispatch] = useReducer(ErrReducer, initialState)

  const getErrors = () => {
    type: GET_ERRORS,
      dispatch({
        payload: {
          msg: action.payload.msg,
          status: action.payload.staus,
          id: action.payload.id,
        },
      })
  }

  const clearErrors = () => {
    type: CLEAR_ERRORS,
      dispatch({
        msg: {},
        status: null,
        id: null,
      })
  }

  const value = { msg: state.value, status: state.status, id: state.id, getErrors }

  return <ErrContext.Provider value={value}>{childer}</ErrContext.Provider>
}
