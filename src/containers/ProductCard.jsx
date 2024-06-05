import '../containers/Products.css';
import React, { useState, useEffect } from "react";
import Stripe from './Stripe';

export default function ProductCard (props) {
  const [loadStripe, setloadStripe] = useState(false);

  useEffect(() => {

  }, []);


    return (
        <div key={props.product.id} className="max-w-[1240px] mx-auto my-8 md:my-0 grid md:grid-cols-2 shadow-xl rounded-lg hover:scale-105 duration-300">
          <img className='max-w-[300px] mx-auto my-4' src={props.product.image_url} alt={props.product.name} />
          <div className='flex flex-col justify-center'>
          <h1 className='md:text4xl sm:text-3xl text-2xl font-bold py-2'>{props.product.name}</h1>
          <p className='font-bold'>${props.product.price}</p>
          <p id="Product-description">{props.product.description}</p><br /><br />
            <button className='w-[150px] font-medium mx-0 py-3 text-white md:mx-0' value={props.product.id} onClick={props.handleCounter}>♡ {props.counter}</button><br />
            { !loadStripe ? <button className='bg-[black] w-[150px] rounded-md font-medium mx-0 py-3 text-white md:mx-0' value={props.product.id} onClick={ (event) => {
              event.preventDefault()
              setloadStripe(true);
            }}>Buy now</button> : null }

            { loadStripe ? 
             <div className='text-black mx-0'>
               <Stripe product={props} /> 
               <button className='bg-[#9ecfca] w-[150px] rounded-md font-medium mx-0 py-3 text-black' value={props.product.id} onClick={ (event) => {
               event.preventDefault()
               setloadStripe(false);
             }}>Cancel</button>
             </div> : null }    
            
           
              <button onClick={(event) => {  event.preventDefault()
              props.addToCart(props) }} className='bg-[#9ecfca] w-[150px] rounded-md font-medium my-6 mx-0 py-3 text-black md:mx-0'value="Add to cart">
                Add to cart
              </button>
          
          </div><br />
      </div>
    )
}
