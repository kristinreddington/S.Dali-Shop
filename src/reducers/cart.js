export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
    return [...state, action.product]

    case 'REMOVE_PRODUCT':
    const firstMatchIndex = state.indexOf(action.payload)
    return state.filter((item, index) => index !== firstMatchIndex )


    default:
      return state;
  }
}
