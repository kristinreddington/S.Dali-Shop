import { resetProductFormData } from './productFormActions';
import fetch from 'isomorphic-fetch';

//** Action Creators **//

const setProducts = products => {
  return {
    type: 'GET_PRODUCTS_SUCCESS',
    products
  }
}

const addProduct = product => {
  return {
    type: 'CREATE_PRODUCT_SUCCESS',
    product
  }
}

// ** Async Actions ** //
export const getProducts = () => {
  return (dispatch) => {
    return fetch('http://localhost:3001/api/products')
    .then(res => res.json())
    .then(products => dispatch(setProducts(products)))
    .catch(error => console.log(error))
  }
}

export const createProduct = product => {
  return dispatch => {
    return fetch('http://localhost:3001/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ product: product })
    })
    .then(res => res.json())
    .then(product => {
      dispatch(addProduct(product))
      dispatch(resetProductFormData())
    })
    .catch(error => console.log(error))
  }
}
