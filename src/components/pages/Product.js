/* eslint-disable arrow-body-style */
import React from 'react'
import styled from 'styled-components'

// import context
import AppContext from '../../state/AppContext'
import Loading from '../layout/Loading'

const Product = ({ match: { params: handle } }) => {
  const [price, setPrice] = React.useState('')
  const [toggle, setToggle] = React.useState(true)
  //  //  //  //  // // //  //

  const state = React.useContext(AppContext)
  const {
    selectedProd,
    getProduct,
    product,
    loading,
    prodImg,
    // shop,
    cartIns,
    checkoutInst,
    udpateCart,
    // cart,
  } = state

  // const chref = React.useRef()

  React.useEffect(() => {
    if (handle) {
      getProduct(handle.handle)
    }
    checkoutInst()
  }, [])

  const handleChange = e => {
    const val = e.target.value
    const variant = product.variants.filter(v => v.id === val)

    selectedProd(variant[0], product.title)
    setPrice(variant[0].price)
  }

  const handleClick = () => {
    udpateCart()
    setToggle(false)
  }

  if (loading) return <Loading />

  return (
    <Wrapper>
      <div>
        <Image src={prodImg} /> {'  '}
      </div>
      <LeftSection>
        <h3 style={{ textAlign: 'center', marginBottom: '10px' }}>
          {product.title}
        </h3>
        {product.variants && (
          <Select id="selectList" onChane={handleChange}>
            <option selected>Choose a Variant</option>
            {product.variants.map((v, i) => {
              return <optin value={v.id}>{v.title}</optin>
            })}
          </Select>
        )}
        {price && <Price>{`NGN ${price}`}</Price>}
        <p style={{ margin: '10px 0' }}>{product.description}</p>
        <Button onClick={handleClick}> Add to Cart </Button>
        <Checkout
          style={toggle ? style : null}
          href={toggle ? null : cartIns.webUrl}
        >
          Checkout
        </Checkout>
      </LeftSection>
    </Wrapper>
  )
}

const style = {
  opacity: '0.4',
}

const Price = styled.p`
  font-size: 25px;
  font-weight: 400;
  margin: 10px 0;
`

const Button = styled.button`
  display: block;
  background-color: #607d8b;
  color: #fff;
  width: 80%;
  outline: none;
  border: none;
  text-align: center;
  justify-content: center;
  padding: 10px 25px;
  margin: 10px 0;
`

const Checkout = styled.a`
  display: block;
  background-color: transparent;
  color: #607d8b;
  width: 80%;
  border: solid 2px #607d8b;
  text-align: center;
  justify-content: center;
  padding: 10px 25px;
  margin: 10px 0;
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 5rem auto;
  overflow: hidden;
`

const Image = styled.img`
  width: 90%;
  height: 90%px;
`

const Select = styled.select`
  width: 100%;
  padding: 7px 0;
  margin: 5px 0 10px 0;
`

const LeftSection = styled.div``

export default Product
