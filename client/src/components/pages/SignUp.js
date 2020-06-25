import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Login = () => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <Model>
        <H1>Sign Up</H1>
        <Form>
          <Label>Name </Label>
          <Input placeholder="Enter Name..." />
          <Label>Email </Label>
          <Input placeholder="Enter Email..." />
          <Label>Phone </Label>
          <Input placeholder="Enter Phone..." />
          <Label>Age </Label>
          <Input placeholder="Enter Age..." />
          <Label>Password </Label>
          <Input placeholder="At least 8 characters!" />
          <SignUpButton>Sign Up</SignUpButton>
        </Form>
        <Link to="/login">
          <P style={{ textAlign: 'center' }}>Already A User, Login</P>
        </Link>
      </Model>
    </div>
  )
}

const H1 = styled.h1`
  font-size: ${({ theme }) => theme.headerFont};
  font-weight: 500;
  margin-left: 5rem;
  padding-top: 0.5rem;
  text-align: center;
  margin: auto;
`

const Model = styled.div`
  margin: auto;
  width: 65%;
  -webkit-box-shadow: ${({ theme }) => theme.shadow};
  box-shadow: ${({ theme }) => theme.shadow};
  height: 65vh;
  background-color: #fff;
  margin-top: 5%;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 35%;
    height: 45vh;
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
  font-size: 12px;
  padding-top: 2%;
  font-weight: 300;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 10px;
  }
`

const Input = styled.input`
  margin: auto;
  width: 70%;
  height: 16px;
  border-radius: 3px;
  border-bottom-color: 0.5rem #ccc;
  border-top: none;
  border-left: none;
  border-right: none;
  &:focus {
    background-color: #fff;
    border-bottom-color: ${({ theme }) => theme.primaryButton};
    outline: none;
    width: 72%;
  }
`

const SignUpButton = styled.button`
  background-color: ${({ theme }) => theme.primaryButton};
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
