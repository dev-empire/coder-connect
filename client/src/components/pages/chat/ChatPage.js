import React from 'react'
import styled from 'styled-components'
import ChatBar from './SidePane'
import SideNav from './SideNav'

const ChatPage = () => (
  <Body>
    <SideDiv>
      <SideNav />
    </SideDiv>
    <Div>
      <ChatBar />
    </Div>
  </Body>
)

const Body = styled.div`
  height: 93.7vh;
  display: flex;
`

const Div = styled.div`
  /* align-items: center; */
  text-align: center;
  margin: auto;
  height: 100%;
  padding: 0;
  flex-grow: 4;
  color: ${({ theme }) => theme.primaryButton};
  font-size: ${({ theme }) => theme.headerFont};
`

const SideDiv = styled.nav`
  align-items: center;
  height: 100%;
  margin: auto;
  width: 5%;
  background-color: ${({ theme }) => theme.primaryDark};
  color: #f4f4f4;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 15%;
  }
`

export default ChatPage
