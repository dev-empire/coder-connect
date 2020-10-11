import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { Settings, Chat, ExitToApp, Person } from '@material-ui/icons'

const SideBar = () => {
  const location = useLocation()
  const isChatPage = location.pathname === '/chat'
  return (
    <Div>
      <Link to="/profile">
        <div>
          <Person />
        </div>
      </Link>
      {isChatPage ? null : (
        <Link to="/chat">
          <div>
            <Chat />
          </div>
        </Link>
      )}
      <Link to="/profile/settings">
        <div>
          <Settings />
        </div>
      </Link>
      <div>
        <ExitToApp />
      </div>
    </Div>
  )
}

const Div = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;
  div {
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: auto;
    border-radius: 50%;
    width: 50%;
    /* padding: 5px; */
    color: #f4f4f4;
    margin-top: 3rem;
    &:hover {
      /* background-color: ${({ theme }) => theme.primaryButton}; */
    }
  }
`

export default SideBar
