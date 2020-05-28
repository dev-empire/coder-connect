/* eslint-disable no-lone-blocks */
import React from 'react'
import styled from 'styled-components'

// import context
import AppContext from '.././state/AppContext'

const Img = () => {
  const state = React.useContext(AppContext)
  const { products, alt } = state
  {
    products.map(product => <h2>{product}</h2>)
  }
  // console.log(products)
  return <Image src={product} alt={alt} />
}

const Image = styled.img`
  width: 90%;
  height: 90%px;
`

export default Img
