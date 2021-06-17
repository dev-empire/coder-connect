import React from 'react'
import { Redirect } from 'react-router-dom'

const Home = () => {
  const loggedIn = true

  if (loggedIn === true) {
    return <Redirect to="/chat" />
  } else {
    return <Redirect to="login" />
  }
}

export default Home
