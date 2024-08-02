import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../actions/productActions'
import ProductCard from './ProductCard';
import Auth from '../helpers/Auth.ts';
import { addToCart, removeFromCart } from '../actions/cartActions';
import Stripe from './Stripe';

class Products extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0
    }
  }

  componentDidMount() {
    this.loadStripe = false;
    this.props.getProducts();
  }

  handleCounter = (event) => {
    event.preventDefault();
    this.setState ({
      counter: this.state.counter += 1
    })
  }

  render() {
    return (
      <div className="w-full py-16 px-4">
        {this.props.products.map(product =>
          <div>
            <ProductCard auth={this.props.auth}
              handleCounter={this.handleCounter} cart={this.props.cart} counter={this.state.counter} 
              addToCart={this.props.addToCart} key={product.id} product={product} />
          </div>
        )}
      </div>
      )
    }
  };

const mapStateToProps = (state) => {
  return ({
    products: state.products,
    cart: state.cart,
    auth: Auth.getToken()
  })
}


export default connect(mapStateToProps, { getProducts, addToCart, removeFromCart })(Products);
