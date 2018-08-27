import React, { Component } from 'react';
import './Products.css'
import { connect } from 'react-redux';
import { getProducts } from '../actions/productActions'
import ProductCard from '../components/ProductCard';


class Products extends Component {

  componentDidMount() {
    this.props.getProducts()
  }

render() {
  return (
    <div>
    {this.props.products.map(product => <ProductCard key={product.id} product={product} /> )}
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
