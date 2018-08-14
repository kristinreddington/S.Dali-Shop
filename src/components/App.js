import React, { Component } from 'react';
import './App.css'
import Products from '../containers/Products'
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import ProductForm from '../containers/ProductForm';
import Home from './Home';
class App extends Component {
  render() {
    console.log(this.state)
    return (
      <Router>
      <div>
        <NavLink className="navbar-brand" to='/'>S.Dali</NavLink>
        <NavLink className="navbar-nav" to='/new'>New</NavLink>
        <NavLink id="shop" className="navbar-nav" to='/products'>Shop</NavLink>
        <Route exact path='/' component={Home} />
        <Route  path='/products' component={Products} />
        <Route path='/new' component={ProductForm} />

      </div>
      </Router>
    )
  }
}

export default App;
