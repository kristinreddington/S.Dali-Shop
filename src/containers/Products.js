import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../actions/productActions'
import ProductCard from '../components/ProductCard';
import CartButton from './CartButton';
import Auth from '../helpers/Auth';
import { addToCart, removeFromCart, addProduct } from '../actions/cartActions';
import './Products.css'

class Products extends Component {

  componentDidMount() {
    this.props.getProducts()
    this.props.addProduct()
  }

render() {
  return (
    <div className="Product-card">
    {this.props.products.map(product => <ProductCard auth={this.props.auth} cart={this.props.cart} addToCart={this.props.addToCart} addProduct={this.props.addProduct} key={product.id} product={product} />)}
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


export default connect(mapStateToProps, { getProducts, addProduct, addToCart })(Products);
