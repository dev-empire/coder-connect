/* eslint-disable no-case-declarations */
import {
  ADD_CHECKOUT,
  ADD_PROD,
  CREATE_CHECKOUT,
  GET_CLIENT,
  GET_PROD,
  SET_LOADING,
} from './Types'

export default (state, action) => {
  switch (action.type) {
    case GET_CLIENT:
      console.log('Hey')
      const { products, shop } = action.payload
      return {
        ...state,
        products,
        shop,
        loading: false,
      }
    case SET_LOADING:
      console.log('object')
      return {
        ...state,
        loading: true,
      }
    case GET_PROD:
      console.log('hi')
      return {
        ...state,
        product: action.payload.product,
        prodImg: action.payload.image,
        loading: false,
      }
    case ADD_PROD:
      const { cart } = action.payload
      return {
        ...state,
        cart,
      }
    case CREATE_CHECKOUT:
      return {
        ...state,
        cartIns: action.payload,
      }
    default:
      return state
  }
}
