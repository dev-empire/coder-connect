import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../../store/ducks/user'

const Home = () => {
  const dispatch = useDispatch()
  const { state } = useSelector(state => ({ state }))
  const loggedIn = true

  useEffect(() => {
    dispatch(getAllUsers())
  }, [])

  if (loggedIn === true) {
    return Redirect('/chat')
  } else {
    return <div className="ui center capitalize">Welcome</div>
  }
}

export default Home
