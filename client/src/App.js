/* eslint-disable arrow-body-style */
/* eslint-disable import/no-unresolved */
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import ChatPage from '@chat/ChatPage'
import Chat from '@chat/Chat'
import Home from '@pages/Home'
import Navbar from '@layout/Navbar'
import Login from '@pages/Login'
import SignUp from '@pages/SignUp'
import Profile from '@pages/Profile'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './style/Global'
import { theme } from './style/theme'
import store from './store/config'

const App = () => {
  return (
    <Provider store={store}>
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
                <Route path="/profile" component={Profile} />
              </Switch>
            </div>
          </div>
        </Router>
      </ThemeProvider>
    </Provider>
  )
}

export default App
