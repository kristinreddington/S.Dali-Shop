import React from 'react';

const ProductCard = (props) => (
    <div key={props.product.id} className="Product-list-item">
    <h3 id="Product-name">{props.product.name}</h3>
    <img id="Product-image" src={props.product.image_url} alt={props.product.name} />
    <p id="Product-price">${props.product.price}</p>
    <p id="Product-description">{props.product.description}</p><br /><br />
    <form
    onSubmit={() => props.addToCart(props)}
    ><input type="hidden" name="user" value={props.auth} />
    <input type="submit" value="Add to cart"/> </form>
  </div>
)

export default ProductCard;
