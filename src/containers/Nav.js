import React, { Component } from 'react';
import '../components/App.css'
import Products from './Products'
import { BrowserRouter as Router, NavLink, Redirect, Route } from 'react-router-dom';
import Home from '../components/Home';
import Blog from './Blog'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import Auth from '../helpers/Auth'
import Dashboard from './Dashboard'

class Nav extends Component {
  constructor() {
    super()
    this.state = {
      auth: Auth.isUserAuthenticated(),
  }
   this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this)
   this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
   this.handleLogOut = this.handleLogOut.bind(this)
}


 handleRegisterSubmit(event, data) {
   event.preventDefault();
   fetch('https://s-dali-shop-app-api.herokuapp.com/api/users', {
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
     });
   }).catch(error => {
     console.log(error)
   })
 }

 handleLoginSubmit(event, data) {
   event.preventDefault();
   fetch('https://s-dali-shop-app-api.herokuapp.com/api/login', {
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
       });
   }).catch(error => {
     console.log(error)
   })
 }

 handleLogOut() {
   fetch('https://s-dali-shop-app-api.herokuapp.com/api/logout', {
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
   }).then()
   .catch(error => console.log(error))
 }


 render() {
   return (
     <Router>
      <div>
        <NavLink className="navbar-brand" to='/'>S.Dali</NavLink>
        {!(this.state.auth) ? <NavLink id="user" className="navbar-nav" to='/login'>Account</NavLink> : ''}
        <NavLink id="shop" className="navbar-nav" to='/products'>Shop</NavLink>
        <NavLink id="inspo" className="navbar-nav" to='/inspo'>Inspo</NavLink>
        {!(this.state.auth) ? <NavLink id="register" className="navbar-nav" to='/register'>Register</NavLink> : ''}
        {(this.state.auth) ? <NavLink to='/dash' className="navbar-nav">Dash</NavLink> : ''}
        {(this.state.auth) ? <NavLink id="logout" className="navbar-nav" to='/' onClick={this.handleLogOut}>Logout</NavLink> : ''}

        <Route path='/login' render={() => (this.state.auth)
            ? <Redirect to="/dash" />
            : <LoginForm handleLoginSubmit={this.handleLoginSubmit}/>} />

        <Route path='/register' render={ () => (this.state.auth)
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
export default Nav;
