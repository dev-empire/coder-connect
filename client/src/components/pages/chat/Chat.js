import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Send, ArrowLeftOutlined } from '@material-ui/icons/'

const Chat = () => {
  return (
    <div>
      <Link to="/chat">
        <ArrowLeftOutlined style={{ fontSize: '60', color: '#5f9ea0' }} />
      </Link>
      <Div>
        <h3 style={{ textAlign: 'center' }}>Username</h3>
        <Msg className="container">
          <div>
            <Textarea name="text" cols="10" rows="2"></Textarea>
          </div>
          <div>
            <Button type="submit">
              {' '}
              <Send fontSize="small" />
            </Button>
          </div>
        </Msg>
      </Div>
    </div>
  )
}

const Div = styled.div`
  /* align-items: center; */
  text-align: center;
  margin: auto;
  height: 100%;
  padding: 0;
  flex-grow: 4;
  color: ${({ theme }) => theme.primaryButton};
  font-size: ${({ theme }) => theme.headerFont};
  div {
    text-align: center;
    display: flex;
    flex-direction: row;
  }
`

const Msg = styled.div`
  /* text-align: center; */
  justify-content: center;
`

const Button = styled.button`
  width: 5rem;
  text-align: center;
  height: 70%;
  color: #fff;
  border: none;
  background-color: ${({ theme }) => theme.primaryButton};
  outline: none;
  border-radius: 1px;
  margin-bottom: 1rem;
  &:hover {
    background-color: ${({ theme }) => theme.secondaryButton};
  }
`

const Textarea = styled.textarea`
  width: 45rem;
  height: 60%;
  resize: none;
  /* border: 0.1rem ${({ theme }) => theme.primaryButton}; */
  outline: none;
  /* line-height: 1.2; */
  &:focus {
    padding: 0.2rem;
    width: 43rem;
    height: 55%;
    /* outline-color: ; */
    border: ${({ theme }) => theme.primaryButton} solid 1.5px;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 13rem;
    &:focus {
      height: 55;
      width: 13rem;
    }
  }
`

export default Chat
