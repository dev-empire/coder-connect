/* eslint-disable consistent-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable curly */
/* eslint-disable no-else-return */
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Loading from '../layout/Loading'
import GridWrapper from '../Grid'

// import Img from '../Img'

// import context
import AppContext from '../../state/AppContext'

const Home = () => {
  const state = React.useContext(AppContext)

  const { loading, products } = state

  if (loading) return <Loading />
  else
    return (
      <>
        <Wrapper>
          <GridWrapper>
            {products.map(p => (
              <Card key={p.id}>
                <Img src={p.images} />
                console.log(p.images)
                <Title>{p.title}</Title>
                <Desc>{p.description}</Desc>
                <Link to={`/products/${p.handle}`}>
                  <Button>View</Button>
                </Link>
              </Card>
            ))}
          </GridWrapper>
        </Wrapper>
      </>
    )
}

const Title = styled.h1`
  font-size: 25px;
  font-weight: 400;
  margin: 10px 0;
`

const Desc = styled.p`
  font-size: 19px;
  font-weight: 200;
`

const Card = styled.div`
  text-align: center;
  margin: 10px;
  height: 400px;
  position: relative;
`
const Button = styled.div`
  align-items: center;
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

const Img = styled.img`
  width: 90%;
  height: 90%px;
`

const Wrapper = styled.div`
  max-width: 85%;
  margin: auto;
  margin-top: 50px;
`

export default Home
