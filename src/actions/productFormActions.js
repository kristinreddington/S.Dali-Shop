export const updateProductFormData = productFormData => {
  return {
    type: 'UPDATE_DATA',
    productFormData
  }
}

export const resetProductFormData = () => {
  return {
    type: 'RESET_PRODUCT_FORM'
  }
}
