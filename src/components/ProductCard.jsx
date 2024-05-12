import React from 'react';
import '../containers/Products.css';

const ProductCard = (props) => (
    <div key={props.product.id} className="Product-list-item">
      <h3 id="Product-name">{props.product.name}</h3>
      <img id="Product-image" src={props.product.image_url} alt={props.product.name} />
      <p id="Product-price">${props.product.price}</p>
      <p id="Product-description">{props.product.description}</p><br /><br />
      <div id="buttons" >
        <button value={props.product.id} onClick={props.handleCounter}>♡   {props.counter}</button>
        <form
        onSubmit={ (event) => {
          event.preventDefault()
          props.addToCart(props)}}
          >
          <input type="submit" value="Add to cart"/>
        </form>
      </div>
  </div>
)

export default ProductCard;
