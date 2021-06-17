import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllUsers } from '../../../store/ducks/user'

const ChatPage = () => {
  const dispatch = useDispatch()
  const { state } = useSelector(state => ({ state }))

  useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch])

  return (
    <div className="ui container">
      <div className="mt-2">
        <div className="ui very relaxed divided list">
          {state.user.users.map(user => {
            return (
              <div className="item" key={user._id}>
                <div className="content">
                  <a className="header tag">{user.name}</a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ChatPage
