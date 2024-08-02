import React from 'react';

const CartCard = (props) => (
  <div key={props.line_item.id} className="m-2 text-center hover:shadow-xl">
    <img className='w-[50%]' src={props.line_item.product_image} alt={props.line_item.name} />
    <p>{props.line_item.product_name}</p>
    <p>${props.line_item.product_price}</p>
    <p>{props.line_item.product_description}</p>
    <form
    onSubmit={ function(event) {
      event.preventDefault()
      props.removeFromCart(props.line_item.id) }}
    ><input type="hidden" name="user" value={props.auth} />
    <input type="submit" value="Remove from cart"/> </form>
  </div>
)

export default CartCard;
