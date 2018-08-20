import React, { Component } from 'react';
import './App.css'
import Products from '../containers/Products'
import { BrowserRouter as Router, NavLink, Redirect, Route } from 'react-router-dom';
import ProductForm from '../containers/ProductForm';
import Home from './Home';
import Blog from '../containers/Blog'
import LoginForm from '../containers/LoginForm'
import RegisterForm from '../containers/RegisterForm'
import Auth from '../helpers/Auth'
import Dashboard from '../containers/Dashboard'

class App extends Component {
   constructor() {
     super()
     this.state = {
       auth: Auth.isUserAuthenticated(),
       shouldGoToDash: false,
     }
      this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this),
      this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
      this.handleLogOut = this.handleLogOut.bind(this)
   }

    handleRegisterSubmit(event, data) {
      event.preventDefault();
      fetch('http://localhost:3001/api/users', {
        method: 'POST',
        body: JSON.stringify({
          user: data,
        }),
        headers: {
          'Content-Type': 'application/json',
        }
      }).then(res => res.json())
        .then(res => {
        Auth.authenticateToken(res.token);
        this.setState({
          auth: Auth.isUserAuthenticated(),
          shouldGoToDash: true,
        });
      }).catch(error => {
        console.log(error)
      })
    }

    handleLoginSubmit(event, data) {
      event.preventDefault();
      fetch('http://localhost:3001/api/login', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        }
        }).then(res => res.json())
        .then(res => {
          Auth.authenticateToken(res.token);
          this.setState({
            auth: Auth.isUserAuthenticated(),
            shouldGoToDash: true,
          });
      }).catch(error => {
        console.log(error)
      })
    }

    handleLogOut() {
      fetch('http://localhost:3001/api/logout', {
        method: 'DELETE',
        headers: {
          token: Auth.getToken(),
          'Authorization': `Token ${Auth.getToken()}`,
        }
      }).then(res => {
        Auth.deauthenticateToken();
        this.setState({
          auth: Auth.isUserAuthenticated(),
        })
      }).catch(error => console.log(error))
    }


  render() {

    return (
      <Router>
      <div>
        <NavLink className="navbar-brand" to='/'>S.Dali</NavLink>
        <NavLink id="user" className="navbar-nav" to='/account'>Account</NavLink>
        <NavLink id="shop" className="navbar-nav" to='/products'>Shop</NavLink>
        <NavLink id="inspo" className="navbar-nav" to='/inspo'>Inspo</NavLink>
        <NavLink id="register" className="navbar-nav" to='/register'>Register</NavLink>
        {(this.state.auth) ? <NavLink to='/dash' className="navbar-nav">Dash</NavLink> : ''}
        {(this.state.auth) ? <span onClick={this.handleLogOut}>Logout</span> : ''}

        <Route path='/account' render={() => (this.state.auth)
          ? <Redirect to="/dash" />
          : <LoginForm handleLoginSubmit={this.handleLoginSubmit}/>} />

        <Route path='/register' render={() => (this.state.auth)
          ? <Redirect to="/dash" />
          : <RegisterForm handleRegisterSubmit={this.handleRegisterSubmit}/>} />

        <Route path='/dash' component={Dashboard} />
        <Route path='/inspo' component={Blog} />
        <Route exact path='/' component={Home} />
        <Route  path='/products' component={Products} />
      </div>
      </Router>
    )
  }
}

export default App;
