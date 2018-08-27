export default (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_REGISTER_DATA':
      return action.registerFormData

      default:
      return state
  }
}
