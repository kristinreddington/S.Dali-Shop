import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../actions/productActions'
import ProductCard from '../components/ProductCard';
import Auth from '../helpers/Auth.ts';
import { addToCart, removeFromCart } from '../actions/cartActions';
import './Products.css'

class Products extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0
    }
  }

  componentDidMount() {
    this.props.getProducts()
  }

  handleCounter = (event) => {
    event.preventDefault();
    this.setState ({
      counter: this.state.counter += 1
    })
  }

  render() {
    return (
      <div className="Product-card">
      {this.props.products.map(product => <ProductCard auth={this.props.auth} handleCounter={this.handleCounter} cart={this.props.cart} counter={this.state.counter} addToCart={this.props.addToCart} key={product.id} product={product} />)}
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
