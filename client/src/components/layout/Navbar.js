import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
  const location = useLocation()
  const isLogin = location.pathname === '/login'
  const isSignUp = location.pathname === '/signup'

  return (
    <div className="ui menu">
      <Link to="/" className="ui item">
        Home
      </Link>
      {isLogin || isSignUp ? null : (
        <>
          <Link to="/chat" className="ui item">
            Chat
          </Link>
          <Link to="/profile" className="ui item">
            Profile
          </Link>
        </>
      )}

      <div className="right item">
        {isLogin ? null : (
          <Link to="/login" className="ui item secondary">
            Log In
          </Link>
        )}
        {isSignUp ? null : (
          <Link to="/signup" className="ui item secondary">
            Sign Up
          </Link>
        )}
      </div>
    </div>
  )
}

export default Navbar
