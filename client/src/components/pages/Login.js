import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Login = () => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <Model>
        <H1>Login</H1>
        <Form>
          <Label>Email </Label>
          <Input placeholder="Enter Email..." />
          <Label>Password </Label>
          <Input placeholder="Enter Password..." />
          <LoginButton>Login</LoginButton>
        </Form>
        <Link to="/signup">
          <P style={{ textAlign: 'center' }}>Not A User, Sign up!</P>
        </Link>
      </Model>
    </div>
  )
}

const H1 = styled.h1`
  font-size: ${({ theme }) => theme.headerFont};
  font-weight: 400;
  margin-left: 5rem;
  padding-top: 0.5rem;
  text-align: center;
  margin: auto;
`

const Model = styled.div`
  margin: auto;
  width: 50%;
  -webkit-box-shadow: ${({ theme }) => theme.shadow};
  box-shadow: ${({ theme }) => theme.shadow};
  height: 45vh;
  background-color: #fff;
  margin-top: 5%;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 35%;
    height: 35vh;
    width: 80%;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`

const Label = styled.label`
  padding: 2%;
  font-size: 15px;
  padding-top: 3%;
  font-weight: 300;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 12px;
  }
`

const Input = styled.input`
  margin: auto;
  width: 70%;
  height: 20px;
  border-radius: 3px;
  border-bottom-color: 0.5rem #ccc;
  border-top: none;
  border-left: none;
  border-right: none;
  &:focus {
    background-color: #fff;
    border-bottom-color: ${({ theme }) => theme.primaryButton};
    outline: none;
    width: 71%;
  }
`

const LoginButton = styled.button`
  width: 10rem;
  border: none;
  margin: auto;
  margin-top: 2rem;
  padding: 0.5rem;
  color: ${({ theme }) => theme.primaryDark};
  background-color: ${({ theme }) => theme.secondaryButton};
  &:hover {
    background-color: ${({ theme }) => theme.primaryButton};
  }
`

const P = styled.p`
  font-size: 0.8rem;
  font-weight: 200;
`

export default Login
