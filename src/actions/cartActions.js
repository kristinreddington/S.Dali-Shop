import Auth from '../helpers/Auth';

export const addProduct = product => {
  return {
    type: 'ADD_PRODUCT',
    product
  }
}

const removeProduct = product => {
  return {
    type: 'REMOVE_PRODUCT',
    product
  }
}
// ** Async Actions ** //

export const addToCart = (props) => {
  
  return (dispatch) => {
    fetch('http://localhost:3001/api/line_items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
       body: JSON.stringify({
         data: props
        })
    })
    .then(res => {
      debugger
    })
  }
}
//
//
// export const removeFromCart = product => {
//   return (dispatch) => {
//     removeProduct(product)
//   }
