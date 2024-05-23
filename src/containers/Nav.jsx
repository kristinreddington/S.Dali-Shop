import React, { Component } from 'react';
import '../components/App.css'
import Products from './Products'
import { BrowserRouter as Router, NavLink, Redirect, Route } from 'react-router-dom';
import Home from '../components/Home';
import Blog from './Blog'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import Auth from '../helpers/Auth.ts'
import Dashboard from './Dashboard'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

class Nav extends Component {
  constructor() {
    super()
    this.state = {
      auth: Auth.isUserAuthenticated(),
      nav: false
  }
   this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this)
   this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
   this.handleLogOut = this.handleLogOut.bind(this)
   this.handleNav = this.handleNav.bind(this)
}

handleNav() {
  this.setState({
    nav: !this.state.nav
  });
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
   }).then()
   .catch(error => console.log(error))
 }


 render() {
   return (
     <Router>
      <div>
        <div className='flex flex-row justify-between'>
          <h1>
            <NavLink className="w-full text-3xl font-bold navbar-brand" to='/'>S.Dali</NavLink>
          </h1>
          <div className='block md:hidden' onClick={this.handleNav}>{!this.state.nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20}/>}
          </div>
        </div>
        <ul className='hidden md:flex'>
          {!(this.state.auth) ?
          <li className='w-full font-bold'>
             <NavLink id="user" className="navbar-nav" to='/login'>Account</NavLink>
          </li> : null}
          <li className='w-full font-bold'>
            <NavLink id="shop" className="navbar-nav" to='/products'>Shop</NavLink>
          </li>
          <li className='w-full font-bold'>
            <NavLink id="inspo" className="navbar-nav" to='/inspo'>Inspo</NavLink>
          </li>
          {!(this.state.auth) ?
          <li className='w-full font-bold'>
             <NavLink id="register" className="navbar-nav" to='/register'>Register</NavLink>
          </li> : null}
          {(this.state.auth) ? 
          <li className='w-full font-bold'>
            <NavLink to='/dash' className="navbar-nav">Dash</NavLink>
          </li> : null}
          {(this.state.auth) ? 
          <li className='w-full font-bold'>
            <NavLink id="logout" className="navbar-nav" to='/' onClick={this.handleLogOut}>Logout</NavLink> 
          </li> : null}
          <Route path='/login' render={() => (this.state.auth)
            ? <Redirect to="/dash" />
            : <LoginForm handleLoginSubmit={this.handleLoginSubmit}/>} />

          <Route path='/register' render={ () => (this.state.auth)
            ? <Redirect to="/dash" />
            : <RegisterForm handleRegisterSubmit={this.handleRegisterSubmit}/>} />
          <Route path='/dash' component={Dashboard} />
          <Route path='/inspo' component={Blog} />
          <Route  path='/products' component={Products} />
        </ul>
        <Route exact path='/' component={Home} />
        <div className={!this.state.nav ? 'fixed left-0 top-o w-[60%] h-full border-r-gray-900 ease-in-out duration-500' : 'md:hidden fixed left-[-100%]'}>
          <ul className='p-4 uppercase'>
            {!(this.state.auth) ?
            <li className='p-4 border-b border-gray-600'>
              <NavLink id="user" className="navbar-nav" to='/login'>Account</NavLink>
            </li> : null}
            <li className='p-4 border-b border-gray-600'>
              <NavLink id="shop" className="navbar-nav" to='/products'>Shop</NavLink>
            </li>
            <li className='p-4 border-b border-gray-600'>
              <NavLink id="inspo" className="navbar-nav" to='/inspo'>Inspo</NavLink>
            </li>
            {!(this.state.auth) ?
            <li className='p-4 border-b border-gray-600'>
              <NavLink id="register" className="navbar-nav" to='/register'>Register</NavLink>
            </li> : null}
            {(this.state.auth) ? 
            <li className='p-4 border-b border-gray-600'>
              <NavLink to='/dash' className="navbar-nav">Dash</NavLink>
            </li> : null}
            {(this.state.auth) ? 
            <li className='p-4 border-b border-gray-600'>
              <NavLink id="logout" className="navbar-nav" to='/' onClick={this.handleLogOut}>Logout</NavLink> 
            </li> : null}
            <Route path='/login' render={() => (this.state.auth)
              ? <Redirect to="/dash" />
              : <LoginForm handleLoginSubmit={this.handleLoginSubmit}/>} />

            <Route path='/register' render={ () => (this.state.auth)
              ? <Redirect to="/dash" />
              : <RegisterForm handleRegisterSubmit={this.handleRegisterSubmit}/>} />
            <Route path='/dash' component={Dashboard} />
            <Route path='/inspo' component={Blog} />
            <Route  path='/products' component={Products} />
          </ul>
        </div>
      </div>
    </Router>
  )
 }
}
export default Nav;
