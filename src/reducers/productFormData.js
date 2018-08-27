const initialState = {
  name: '',
  price: 0,
  image_url: '',
  description: ''
}

export default (state = initialState, action) => {
  switch (action.type){
    case 'UPDATE_DATA':
    return action.productFormData

    case 'RESET_PRODUCT_FORM':
    return initialState;

    default:
      return state;
  }
}
