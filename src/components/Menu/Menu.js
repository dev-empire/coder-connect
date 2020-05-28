/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { StyledMenu } from './Menu.styled'

const Menu = ({ open }) => (
  <StyledMenu open={open}>
    <Link to="/">Home</Link>
    <Link to="/order">Order</Link>
    <Link to="/contact">Contact</Link>
    {/* <Link to="/prducts">Products</Link> */}
  </StyledMenu>
)

Menu.prototype = {
  open: PropTypes.bool.isRequired,
}

export default Menu
