// components, functions etc
import React, { Component, useRef, useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, NavLink, Redirect, Route } from 'react-router-dom';
// icons
import { AiOutlineClose, AiOutlineMenu, AiFillCaretDown } from 'react-icons/ai'
import { GoChevronDown } from "react-icons/go";
// internal components
import '../components/App.css'
import Home from '../components/Home';
import Products from './Products'
import Blog from './Blog'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import Auth from '../helpers/Auth.ts'
import Dashboard from './Dashboard'
// Assets
import Logo from '../assets/Logo.png';
import SDaliShop from '../assets/SDaliShop.png';

const Nav = () => {

  const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);
  const [auth, setAuth] = useState(Auth.isUserAuthenticated());
  const [nav, setNav] = useState(false);

  const menuRef = useRef();

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setAccountDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
  
  useEffect(() => {
    console.log(nav)
  }, [nav]);


  function handleNav() {
    setNav(!nav);
  }
  

  function handleRegisterSubmit(event, data) {
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
        setAuth(Auth.isUserAuthenticated())
      }).catch(error => {
        console.log(error)
      });
  }

  function handleLoginSubmit(event, data) {
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
        setAuth(Auth.isUserAuthenticated());
      }).catch(error => {
        console.log(error)
      })
  }

  function handleLogOut() {
    fetch('http://localhost:3001/api/logout', {
      method: 'DELETE',
      headers: {
        token: Auth.getToken(),
        'Authorization': `Token ${Auth.getToken()}`,
      }
    }).then(res => {
      Auth.deauthenticateToken();
      setAuth(Auth.isUserAuthenticated());
    }).then()
      .catch(error => console.log(error))
  }

  return (
    <Router>
      <div>
        <div className='grid grid-cols-2'>
          <NavLink className={!nav ? "max-w-[300px] font-bold navbar-nav hover:text-dim-gray flex pr-5 col-span-1" : 'hidden'} to='/'>
            <img className="max-w-28" src={SDaliShop} />
          </NavLink>
          <div className='fixed right-0 block p-3' onClick={handleNav}>{nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
        </div>
        <div className={nav ? 'absolute left-0 top-o w-[60%] h-full bg-pearl border-r-dim-gray ease-in-out duration-500 z-50' : 'hidden'}>
          <ul className='p-4 uppercase'>
            {!(auth) ?
              <li className='p-4 border-b border-gray-600'>
                <NavLink onClick={handleNav} id="user" className="text-rose-taupe navbar-nav hover:text-dim-gray" to='/login'>Account<GoChevronDown className='text-rose-taupe' size={20} /></NavLink>
              </li> : null}
            <li className='p-4 border-b border-gray-600'>
              <NavLink onClick={handleNav} id="shop" className="text-rose-taupe navbar-nav hover:text-dim-gray" to='/products'>Shop</NavLink>
            </li>
            <li className='p-4 border-b border-gray-600'>
              <NavLink onClick={handleNav} id="inspo" className="text-rose-taupe navbar-nav hover:text-dim-gray" to='/inspo'>Inspo</NavLink>
            </li>
            {!(auth) ?
              <li className='p-4 border-b border-gray-600'>
                <NavLink onClick={handleNav} id="register" className="text-rose-taupe navbar-nav hover:text-dim-gray" to='/register'>Register</NavLink>
              </li> : null}
            {(auth) ?
              <li className='p-4 border-b border-gray-600'>
                <NavLink onClick={handleNav} to='/dash' className="text-rose-taupe navbar-nav hover:text-dim-gray">Dash</NavLink>
              </li> : null}
            {(auth) ?
              <li className='p-4 border-b border-gray-600'>
                <NavLink onClick={handleNav} id="logout" className="text-rose-taupe navbar-nav hover:text-dim-gray" to='/' onClick={handleLogOut}>Logout</NavLink>
              </li> : null}
          </ul>
        </div>
        <Route path='/login' render={() => (auth)
          ? <Redirect to="/dash" />
          : <LoginForm handleLoginSubmit={handleLoginSubmit} />} />

        <Route path='/register' render={() => (auth)
          ? <Redirect to="/dash" />
          : <RegisterForm handleRegisterSubmit={handleRegisterSubmit} />} />
        <Route path='/dash' component={Dashboard} />
        <Route path='/inspo' component={Blog} />
        <Route path='/products' component={Products} />
        <Route exact path='/' component={Home} />
      </div>
    </Router>
  )
}
export default Nav;
