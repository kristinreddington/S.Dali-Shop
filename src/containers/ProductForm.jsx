import React from "react";
import { connect } from "react-redux";
import { updateProductFormData } from "../actions/productFormActions";
import { createProduct } from "../actions/productActions";

const ProductForm = (props) => {

  const { name, price, image_url, description } = props.productFormData;
  
  handleOnChange = (event) => {
    const { name, value } = event.target;
    const currentProductData = Object.assign({}, props.productFormData, {
      [name]: value,
    });
    props.updateProductFormData(currentProductData);
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    props.createProduct(props.productFormData);
  };

  return (
    <div>
      Add Product to inventory
      <form onChange={this.handleOnChange} onSubmit={this.handleOnSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" value={name} />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input type="number" name="price" value={price} />
        </div>
        <div>
          <label htmlFor="image_url">Image Url:</label>
          <input type="text" name="image_url" value={image_url} />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input type="text" name="description" value={description} />
        </div>

        <button className="text-rose-taupe" type="submit">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
