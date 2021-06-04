import React from 'react'
import styled from 'styled-components'
import { Edit, ExitToApp, Person } from '@material-ui/icons'

const Settings = () => {
  const handleSubmit = e => {
    e.preventDefault()
  }
  return (
    <Body>
      <h2 className="ui center aligned icon header">
        <i className="circular user icon"></i>
        Profile Name
      </h2>
      <Div>
        <div className="ui modal">
          <div className="header">Edit Profile</div>
          <i className="close icon"></i>
          <div className="content">
            <form className="ui form">
              <div className="field">
                <label>Name</label>
                <input type="text" name="email" placeholder="Email" />
              </div>
              <div className="field">
                <label>Email</label>
                <input type="text" name="email" placeholder="Email" />
              </div>
              <div className="field">
                <label>Password</label>
                <input type="password" name="password" placeholder="Password" />
              </div>
            </form>
          </div>
          <div className="actions">
            <div className="ui positive right labeled icon button">
              Save
              <i className="checkmark icon"></i>
            </div>
          </div>
        </div>
        <div>Name</div>
        <div>Email</div>

        <button
          onClick={() => $('.ui.modal').modal('show')}
          className="ui secondary button"
        >
          Edit Profile
        </button>
      </Div>
    </Body>
  )
}

const Body = styled.div`
  height: 93.7vh;
  display: flex;
  flex-direction: column;
`
const Div = styled.div`
  flex-grow: 4;
  div {
    margin-top: 1.5rem;
    border-bottom: 2px #ccc solid;
    padding: 5px;
    display: flex;
    justify-content: space-between;
  }
`

const H3 = styled.h3`
  display: flex;
  justify-content: space-around;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  font-size: 25px;
  color: ${({ theme }) => theme.primaryButton};
`

const Button = styled.button`
  width: 40%;
  text-align: center;
  height: 2rem;
  color: ${({ theme }) => theme.primaryDark};
  border: none;
  background-color: ${({ theme }) => theme.primaryButton};
  outline: none;
  border-radius: 10px;
  margin-top: 1rem;
  &:hover {
    background-color: ${({ theme }) => theme.secondaryButton};
  }
`

const Input = styled.input`
  /* width: 85%; */
`

export default Settings
