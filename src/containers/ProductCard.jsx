import '../containers/Products.css';
import React, { useState, useEffect } from "react";
import Stripe from './Stripe';

export default function ProductCard (props) {
  const [loadStripe, setloadStripe] = useState(false);

  useEffect(() => {

  }, []);


    return (
        <div key={props.product.id} className="Product-list-item">
          <h3 id="Product-name">{props.product.name}</h3>
          <img id="Product-image" src={props.product.image_url} alt={props.product.name} />
          <p id="Product-price">${props.product.price}</p>
          <p id="Product-description">{props.product.description}</p><br /><br />
          <div id="buttons" >
            <button value={props.product.id} onClick={props.handleCounter}>♡{props.counter}</button><br />
            <button value={props.product.id} onClick={ (event) => {
              event.preventDefault()
              setloadStripe(true);
            }
            }>Buy now</button>
             { loadStripe ? <Stripe product={props} /> : <button value={props.product.id} onClick={props.handleCounter}>♡{props.counter}</button>
 } 
            <form onSubmit={ (event) => {
              event.preventDefault()
              props.addToCart(props)}}>
              <input type="submit" value="Add to cart"/>
            </form>
          </div>
      </div>
    )
}
