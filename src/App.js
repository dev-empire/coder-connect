import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import Order from './components/pages/Order'
import Contact from './components/pages/Contact'
import Product from './components/pages/Product'
// import Products from './components/pages/Products'

// import State
import AppState from './state/AppState'

import './App.css'

const App = () => (
  <AppState>
    <Router>
      <div className="app">
        <H1>
          Gro<Span>oce</Span>rfy
        </H1>
        <Navbar />
      </div>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/order" component={Order} />
        <Route path="/product/:handle" component={Product} />
        <Route path="/contact" component={Contact} />
        {/* <Route path="/products" component={Products} /> */}
      </Switch>
    </Router>
  </AppState>
)

const H1 = styled.h1`
  color: #000;
  font-size: 30px;
  font-style: italic;
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  margin-left: 5rem;
  margin-top: 1.5rem;
  @media (max-width: 563px) {
    margin-left: 0.5rem;
  }
`
const Span = styled.span`
  color: #515151;
  font-size: 27px;
  font-weight: 500;
`

export default App
