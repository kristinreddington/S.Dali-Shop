import React from 'react';
import { BrowserRouter as Router, Redirect } from 'react-redux';
import './CartCard.css';

const CartCard = (props) => (
  <div key={props.line_item.id} className="Cart-card-item">
    <img id="line_item-image" src={props.line_item.product_image} alt={props.line_item.name} />
    <p id="line_item-name">{props.line_item.product_name}</p>
    <p id="line_item-price">${props.line_item.product_price}</p>
    <p id="line_item-description">{props.line_item.product_description}</p>
    <form
    onSubmit={ function(event) {
      event.preventDefault()
      props.removeFromCart(props.line_item.id) }}
    ><input type="hidden" name="user" value={props.auth} />
    <input type="submit" value="Remove from cart"/> </form>
  </div>
)

export default CartCard;
