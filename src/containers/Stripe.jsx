import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_API_KEY}`);
export default function Stripe(product) {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    console.log(product);
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:3001/api/checkout", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ data: product.product })
    })
    .then((res) => res.json())
    .then((data) => setClientSecret(data.clientSecret))
      console.log(product);
      console.log(stripePromise);
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}