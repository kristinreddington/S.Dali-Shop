import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../actions/productActions'
import ProductCard from '../components/ProductCard';
import Auth from '../helpers/Auth';
import { addToCart, removeFromCart } from '../actions/cartActions';
import './Products.css'

class Products extends Component {

  componentDidMount() {
    this.props.getProducts()
  }

render() {
  return (
    <div className="Product-card">
    {this.props.products.map(product => <ProductCard auth={this.props.auth} cart={this.props.cart} addToCart={this.props.addToCart} key={product.id} product={product} />)}
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
