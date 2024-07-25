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


  function handleNav() {
    console.log('here!')
    setNav(!nav);
  }
  // function handleAccountDropdown() {
  //   setAccountDropdownOpen(accountDropdownOpen ? false : true);
  // }
  useEffect(() => {
    console.log(nav)
  }, [nav]);


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
      {/* className="bg-[url('../public/dresses.jpg')]" */}
        <div className='grid grid-cols-2'>
          <NavLink className={!nav ? "max-w-[300px] font-bold navbar-nav hover:text-dim-gray flex pr-5 col-span-1" : 'hidden'} to='/'>
            <img src={SDaliShop} />
          </NavLink>
          <div className='fixed right-0 block p-3' onClick={handleNav}>{nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
        </div>
        {/* <ul className='hidden md:flex'>
          <li className='w-full font-bold relative'>
            <button data-ripple-light="true" data-popover-target="menu" onClick={() => setAccountDropdownOpen(!accountDropdownOpen)} id="user" className="text-rose-taupe navbar-nav hover:text-dim-gray transition-all active:opacity-[0.85] active:shadow-none">
              Account<GoChevronDown size={20} className='text-rose-taupe inline' />
            </button>
            {(accountDropdownOpen && !auth) ?
              <ul role="menu" data-popover="menu" data-popover-placement="bottom"
                ref={menuRef} className={accountDropdownOpen ? 'absolute z-10 min-w-[180px] rounded-md border border-blue-gray-50 p-3 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none bg-pearl opacity-80 text-rose-taupe rounded-b-md ml-4 w-min mt-[-20px] translate-y-0 ease opacity-1' : 'hidden -translate-y-20 ease'}>
                <li role="menuitem">
                  <NavLink id="user" className="min-w-full text-ash-grey navbar-nav hover:text-dim-gray" to='/login'>Login</NavLink>
                </li>
                <li role="menuitem">
                  <NavLink id="register" className="min-w-full text-ash-grey navbar-nav hover:text-dim-gray" to='/register'>Register</NavLink>
                </li>
              </ul>
              : null}
            {(accountDropdownOpen && auth) ?
              <div ref={menuRef} className='absolute bg-[#577288] text-white rounded-b-md ml-4 w-min mt-[-20px] ease-in-out duration-500'>
                <NavLink id="user" className="text-ash-grey navbar-nav hover:text-dim-gray" to='/logout'>Logout</NavLink>
              </div>
              : null}
          </li>
          <li className='w-full font-bold'>
            <NavLink id="shop" className="text-rose-taupe navbar-nav hover:text-dim-gray" to='/products'>Shop</NavLink>
          </li>
          <li className='w-full font-bold'>
            <NavLink id="inspo" className="text-rose-taupe navbar-nav hover:text-dim-gray" to='/inspo'>Inspo</NavLink>
          </li>
          {(auth) ?
            <li className='w-full font-bold'>
              <NavLink to='/dash' className="text-rose-taupe navbar-nav hover:text-dim-gray">Dash</NavLink>
            </li> : null}
          {(auth) ?
            <li className='w-full font-bold'>
              <NavLink id="logout" className="text-rose-taupe navbar-nav hover:text-dim-gray" to='/' onClick={handleLogOut}>Logout</NavLink>
            </li> : null}

        </ul> */}
        <div className={nav ? 'absolute left-0 top-o w-[60%] h-full bg-pearl border-r-dim-gray ease-in-out duration-500 z-50' : 'hidden'}>
          <ul className='p-4 uppercase'>
            {!(auth) ?
              <li className='p-4 border-b border-gray-600'>
                <NavLink id="user" className="text-rose-taupe navbar-nav hover:text-dim-gray" to='/login'>Account<GoChevronDown className='text-rose-taupe' size={20} /></NavLink>
              </li> : null}
            <li className='p-4 border-b border-gray-600'>
              <NavLink id="shop" className="text-rose-taupe navbar-nav hover:text-dim-gray" to='/products'>Shop</NavLink>
            </li>
            <li className='p-4 border-b border-gray-600'>
              <NavLink id="inspo" className="text-rose-taupe navbar-nav hover:text-dim-gray" to='/inspo'>Inspo</NavLink>
            </li>
            {!(auth) ?
              <li className='p-4 border-b border-gray-600'>
                <NavLink id="register" className="text-rose-taupe navbar-nav hover:text-dim-gray" to='/register'>Register</NavLink>
              </li> : null}
            {(auth) ?
              <li className='p-4 border-b border-gray-600'>
                <NavLink to='/dash' className="text-rose-taupe navbar-nav hover:text-dim-gray">Dash</NavLink>
              </li> : null}
            {(auth) ?
              <li className='p-4 border-b border-gray-600'>
                <NavLink id="logout" className="text-rose-taupe navbar-nav hover:text-dim-gray" to='/' onClick={handleLogOut}>Logout</NavLink>
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
