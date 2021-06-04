import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
  // const state = React.useContext(Context)
  // const { users } = state
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

const H1 = styled.h1`
  font-size: 25px;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0.4rem;
  height: 5vh;
  background-color: ${({ theme }) => theme.primaryLight};
  color: ${({ theme }) => theme.primaryDark};
`

const Ul = styled.ul`
  display: flex;
  justify-content: space-evenly;
`

const Li = styled.li`
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 4rem;
  list-style: none;
  margin: 0 15px 0 0;
  padding: 5px 3px 5px 5px;
  -webkit-box-shadow: rgba(0, 0, 0, 0.3) 0.1rem 0.2rem 0.3rem;
  box-shadow: rgba(0, 0, 0, 0.3) 1px 1px 2px 1px;
  color: ${({ theme }) => theme.primaryDark};
`

export default Navbar
