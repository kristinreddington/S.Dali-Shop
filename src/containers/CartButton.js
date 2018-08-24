import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Products.css'

class CartButton extends Component {
  constructor(props) {
    super(props)
  }

  addToCart = (event) => {
    let product_id = event.target.value
    console.log(event.target.value)
    fetch('http://localhost:3001/api/line_items', {
      method: 'POST',
      body: JSON.stringify(product_id),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => res.json())
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <div>
      <button key={this.props.product.id} value={this.props.product.id} onClick={this.addToCart}>Add To Cart </button>
      </div>
      )
    }
  }

  const mapStateToProps = (state) => {
    return ({
      products: state.products
      // cart: state.cart
    })
  }

export default connect(mapStateToProps)(CartButton);
