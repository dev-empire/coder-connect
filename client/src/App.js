/* eslint-disable arrow-body-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './style/Global'
import { theme } from './style/theme'

import ChatPage from '@chat/ChatPage'
import Chat from '@chat/Chat'
import Home from '@pages/Home'
import Navbar from '@layout/Navbar'
import Login from '@pages/Login'
import SignUp from '@pages/SignUp'
import Profile from '@profile/Profile'
import Settings from '@pages/Settings'

// import context
import State from './state/AppState'

const App = () => {
  return (
    <State>
      <ThemeProvider theme={theme}>
        <Router>
          <div>
            <GlobalStyle />
            <Navbar />
            <Route exact path="/" component={Home} />
            <Switch>
              <Route exact path="/chat" component={ChatPage} />
              <Route path="/chat/:id" component={Chat} />
            </Switch>
            <div className="container">
              <Switch>
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
                <Route exact path="/profile" component={Profile} />
                <Route path="/profile/settings" component={Settings} />
              </Switch>
            </div>
          </div>
        </Router>
      </ThemeProvider>
    </State>
  )
}

export default App
