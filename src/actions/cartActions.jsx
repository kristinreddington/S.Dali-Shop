import Auth from '../helpers/Auth.ts';
//** Action Creators **//

export const setCart = cart => {
  return {
    type: 'SET_CART',
    cart
  }
}
export const addProductToCart = product => {
  return {
    type: 'ADD_PRODUCT_TO_CART',
    product
  }
}

const removeItemFromCart = product => {
  return {
    type: 'REMOVE_PRODUCT',
    product
  }
}
// ** Async Actions ** //

export const getCartItems = () => {
  return (dispatch) => {
    return fetch(`${process.env.REACT_APP_API_URL}/profile`, {
      method: 'GET',
      headers: {
        token: Auth.getToken(),
        Authorization: `Token ${Auth.getToken()}`
      }
    }).then(res => res.json())
      .then(cart => dispatch(setCart(cart)))
      .catch(error => console.log(error))
  }
}

export const addToCart = (props) => {

  return (dispatch) => {
    fetch(`${process.env.REACT_APP_API_URL}/line_items`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
       body: JSON.stringify({ data: props })
     })
      .then(res => res.json())
      .then(product => {
        dispatch(addProductToCart(product))
    })
    .catch(error => console.log(error))
  }
}

export const removeFromCart = (props) => {
  console.log(props)
  return (dispatch) => {
    fetch(`${process.env.REACT_APP_API_URL}/line_items/${props}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data: props })
    })
      .then(res => res.json())
      .then(line_item => {
        dispatch(removeItemFromCart(line_item))
      })
      .then(dispatch(getCartItems()))
      .catch(error => console.log(error))
  }
}
