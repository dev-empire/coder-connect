import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// import Img from '../Img'

// import context
import AppContext from '../../state/AppContext'

const Products = () => {
  const state = React.useContext(AppContext)
  const { products, product, prodImg } = state
  console.log(product)
  return products.map(p => (
    <Card>
      <Img images={prodImg} alt={p.title} />
      <Title>{p.title}</Title>
      <Desc>{p.description}</Desc>
      <Link to={`/products/${p.handle}`}>
        <Button>View</Button>
      </Link>
    </Card>
  ))
}

const Title = styled.h1`
  font-size: 25px;
  font-weight: 400;
  text-align: left;
  margin: 10px 0;
`

const Desc = styled.p`
  font-size: 19px;
  font-weight: 200;
`

const Card = styled.div`
  margin: 10px;
  height: 400px;
  position: relative;
`
const Button = styled.div`
  display: block;
  background-color: #607d86;
  color: #fff;
  width: 80%;

  text-align: center;
  justify-content: center;
  padding: 10px 25px;
  position: absolute;
  bottom: 0;
`

export default Products
