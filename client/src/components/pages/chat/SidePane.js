import React, { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import Loading from '@layout/Loading'

// import context
import Context from '@state/appContext'

const ChatBar = () => {
  const state = useContext(Context)
  const { loading, users, getUsers } = state
  useEffect(() => {
    getUsers()
  }, [])

  if (loading) {
    return <Loading />
  } else {
    return (
      <Body>
        {users.flatMap(({ _id, name }) => (
          <div key={Math.floor(Math.random() * 1000000)}>
            <NavLink to={`/chat/${_id}`} activeStyle={{ color: 'blue' }}>
              <Div>{name}</Div>
            </NavLink>
          </div>
        ))}
      </Body>
    )
  }
}

const Body = styled.div`
  padding: 0;
  height: 100%;
  margin: auto;
  /* display: flex; */
  text-align: center;
  /* background-color: ${({ theme }) => theme.primary}; */
  /* align-items: center; */
  width: 60%;
  div {
    a {color: #000;
    }
    /* text-align: center; */
    /* justify-content: center; */
    /* align-items: center; */
    margin: auto;
    width: 95%;
    margin-top: 1px;
    color: #000;
    height: 2.5rem;
    /* margin-top: 1.5rem;
    margin-bottom: 1.5rem; */
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
`

const Div = styled.div`
  border-bottom: #ccc solid;
`

export default ChatBar
