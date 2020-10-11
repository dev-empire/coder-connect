import * as React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import * as Store from 'react-redux'

import Loading from '@layout/Loading'

// import redux store
import { getUser } from '@root/store/ducks/user'
import PropTypes from 'prop-types'

const SidePane = () => {
  const state = Store.useSelector(state => state.user)
  const dispatch = Store.useDispatch()

  React.useEffect(() => {
    dispatch(getUser())
  }, [])
  const { users } = state

  if (!users.length) {
    return <Loading />
  }
  return (
    <Body>
      {users.map(user => (
        <div key={user._id}>
          <NavLink to={`/chat/${user._id}`} activeStyle={{ color: 'blue' }}>
            <Name>{user.name}</Name>
          </NavLink>
        </div>
      ))}
    </Body>
  )
}

const Body = styled.div`
  padding: 0;
  height: 100%;
  margin: auto;
  text-align: center;
  width: 60%;
  div {
    a {
      color: #000;
    }
    margin: auto;
    width: 95%;
    margin-top: 1px;
    color: #000;
    height: 2.5rem;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
`

const Name = styled.div`
  border-bottom: #ccc solid;
`

export default SidePane
