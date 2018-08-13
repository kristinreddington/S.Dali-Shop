import React, { Component } from 'react';
import './Products.css'
import ProductForm from './ProductForm';
import { connect } from 'react-redux';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../actions/productActions'

class Products extends Component {

  componentDidMount() {
    this.props.getProducts()
  }

render() {
  return (
  <div>
    <h1>Products Container </h1>
    {this.props.products.map(product => <ProductCard key={product.id} product={product} /> )}
    <ProductForm />
    </div>
    )
  }
};

const mapStateToProps = (state) => {
  return ({
    products: state.products
  })
}

export default connect(mapStateToProps, { getProducts })(Products);
