/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */

import React from 'react'
import Client from 'shopify-buy'
import AppContext from './AppContext'
import AppReducer from './AppReducer'

import {
  ADD_CHECKOUT,
  ADD_PROD,
  CREATE_CHECKOUT,
  GET_CLIENT,
  GET_PROD,
  SET_LOADING,
} from './Types'

const AppState = props => {
  const { children } = props
  const initialstate = {
    products: [],
    shop: [],
    loading: false,
    product: {},
    prodImage: [],
    cart: {},
    cartIns: '',
  }
  const [state, dispatch] = React.useReducer(AppReducer, initialstate)

  const { product, prodImage, products, shop, cartIns, cart, loading } = state

  const client = Client.buildClient({
    domain: 'groocerfy.myshopify.com',
    storefrontAccessToken: '679739913e0627471f3110069c1e298b',
  })

  React.useEffect(() => {
    getClient(client)
    getProduct()
  }, [])

  const getClient = async clt => {
    setLoading()
    const prod = await clt.product.fetchAll()
    const shop = await clt.shop.fetchInfo()
    const data = { products: prod, shop }
    dispatch({
      type: GET_CLIENT,
      payload: data,
    })
  }

  const checkoutInst = async () => {
    const res = await client.checkout.create()
    dispatch({
      type: CREATE_CHECKOUT,
      payload: res,
    })
  }

  const selectedProd = (prod, title) => {
    const { price, id } = prod

    const payload = { price, title, id }

    dispatch({
      type: ADD_PROD,
      payload,
    })
  }

  const getProduct = async handle => {
    try {
      setLoading()

      const product = await client.product.fetchByHandle(handle)
      console.log(product)

      const { images, variants, title, description } = product
      const image = images[0].src
      const prod = { images, variants, title, description }
      console.log(image)
      dispatch({
        type: GET_PROD,
        payload: product,
      })
    } catch (error) {
      console.log(error)
    }
  }
  const updateCart = async () => {
    const lineItemsToAdd = [
      {
        variantId: cart.id,
        quantity: 5,
      },
    ]

    const res = await client.checkout.addLineItems(cartIns.id, lineItemsToAdd)

    dispatch({
      type: CREATE_CHECKOUT,
      payload: res,
    })
  }

  const setLoading = () => dispatch({ type: SET_LOADING })

  const value = {
    product,
    prodImage,
    products,
    shop,
    cartIns,
    checkoutInst,
    cart,
    loading,
    updateCart,
    getProduct,
    selectedProd,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
export default AppState
