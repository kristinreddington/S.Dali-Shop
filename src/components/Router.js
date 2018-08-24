import React, { Component } from 'react';
import { Connect } from 'react-redux';
import { BrowserRouter as Router, NavLink, Redirect, Route, Switch } from 'react-router-dom';

import ProductForm from '../containers/ProductForm';
import Home from './Home';
import Blog from '../containers/Blog'
import LoginForm from '../containers/LoginForm'
import RegisterForm from '../containers/RegisterForm'
import Auth from '../helpers/Auth'
import Dashboard from '../containers/Dashboard'

class Router extends Component {
  constructor(){
    super()
    this.state = {
      auth: Auth.isUserAuthenticated(),
    }
  }

  function PrivateRoute ({component: Component, auth, ...rest}) {
    return (
      <Route
        {...rest}
        render={ (props) => auth === true
          ? <Component {...props} />
          : <Redirect to={ {pathname: '/login', state: {from: props.location}} } /> }
      />
    )
  }

  render() {
    return (
  <Switch>
    <Route exact path='/' component={Home} />
    <PrivateRoute exact path='/dash' component={Dashboard} />
    <Route exact path='/login' component={LoginForm} />
    <Route exact path='/register' component={RegisterForm} />
    <Route exact path='/inspo' component={Blog} />
    <PrivateRoute exact path='/shop' auth={this.state.auth} component={Products} />
  </Switch>
)}

}
  export default Router;
