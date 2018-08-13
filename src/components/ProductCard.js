import React from 'react';

const ProductCard = ({ product }) => (
  <div key={product.id} className="Product-card">
    <h3 id="Product-name">{product.name}</h3>
    <img id="Product-image" src={product.image_url} alt={product.name} />
    <p id="Product-price">${product.price}</p>
    <p id="Product-description">{product.description}</p><br /><br />
  </div>
)

export default ProductCard;
