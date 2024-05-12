export default (state: any[] = [], action) => {
  switch (action.type) {
    case 'SET_CART':
      return action.cart

    case 'ADD_PRODUCT_TO_CART':
      return [...state, action.product]

    case 'REMOVE_ITEM_FROM_CART':
    const firstMatchIndex = state.indexOf(action.payload)
    return state.filter((item, index) => index !== firstMatchIndex)


    default:
      return state;
  }
}
