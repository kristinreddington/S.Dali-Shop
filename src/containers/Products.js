import React, { Component } from 'react';
import './Products.css'
import ProductForm from './ProductForm';
import { connect } from 'react-redux';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../actions/productActions'
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
class Products extends Component {

  componentDidMount() {
    this.props.getProducts()
  }

render() {
  return (

  <div>
  <Router>
  <div>
  <NavLink to='/new'>New</NavLink>
  <Route path="/new" component={ProductForm} />
</div>
  </Router>
  <h1>S Dali</h1>
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
