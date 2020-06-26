import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Settings, Chat, ExitToApp, Person } from '@material-ui/icons'

const SideNav = () => {
  return (
    <Div>
      <NavLink
        to="/profile"
        style={{ color: '#f4f4f4' }}
        activeStyle={{ color: 'blue' }}
      >
        <div>
          <Person />
        </div>
      </NavLink>
      <NavLink
        to="/chat"
        style={{ color: '#f4f4f4' }}
        activeStyle={{ color: 'blue' }}
      >
        <div>
          <Chat />
        </div>
      </NavLink>
      <NavLink
        to="/profile/settings"
        style={{ color: '#f4f4f4' }}
        activeStyle={{ color: 'blue' }}
      >
        <div>
          <Settings />
        </div>
      </NavLink>
      <div>
        <ExitToApp />
      </div>
    </Div>
  )
}

const Div = styled.div`
  background-color: ${({ theme }) => theme.primaryDark};
  div {
    text-align: center;
    justify-content: center;
    align-items: center;
    z-index: 2;
    text-align: center;
    margin: auto;
    width: 100%;
    margin-top: 3rem;
  }
`

export default SideNav
