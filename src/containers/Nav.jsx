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

const Nav = () => {
 
const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);
const [auth, setAuth] = useState(Auth.isUserAuthenticated());
const [nav, setNav] = useState(false);
  
  const menuRef = useRef();

  // const closeOpenMenus = useCallback(
  //   (e) => {
  //     if (
  //       menuRef.current &&
  //       accountDropdownOpen &&
  //       !menuRef.current.contains(e.target)
  //     ) {
  //       setAccountDropdownOpen(false);
  //     }
  //   },
  //   [accountDropdownOpen]
  // );
  
  // useEffect(() => {
  //   document.addEventListener("mousedown", closeOpenMenus);
  // }, [closeOpenMenus]);

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
  setNav(!nav);
}
// function handleAccountDropdown() {
//   setAccountDropdownOpen(accountDropdownOpen ? false : true);
// }
useEffect(() => {
  console.log(accountDropdownOpen)
}, [accountDropdownOpen]);


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
        <ul className='md:hidden'>
          <li>
            <NavLink className="max-w-[300px] font-bold navbar-nav flex pr-5" to='/'>
              <img src={Logo} />
            </NavLink>
          </li>
        </ul>
        <div className='right-0 block md:hidden p-3 navbar-nav' onClick={handleNav}>{nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20}/>}
          </div>
        <ul className='hidden md:flex'>
          <li className='w-full'>
           <NavLink className="w-full font-bold navbar-nav flex pr-5" to='/'>
            <img src={Logo} />
           </NavLink>
          </li>
          <li className='w-full font-bold relative'>
             <button onClick={() => setAccountDropdownOpen(!accountDropdownOpen)} id="user" className="text-rose-taupe navbar-nav" to='/login'>
                Account<GoChevronDown size={20} className='text-rose-taupe inline'/>
             </button>
              { (accountDropdownOpen && !auth) ?
                 <div ref={menuRef} className={accountDropdownOpen ? 'absolute bg-dim-gray text-white rounded-b-md ml-4 w-min mt-[-20px] translate-y-0 ease opacity-1' : 'hidden -translate-y-20 ease'}>
                  <NavLink id="user" className="text-ash-grey navbar-nav" to='/login'>Login</NavLink>
                  <NavLink id="register" className="text-ash-grey navbar-nav" to='/register'>Register</NavLink>
                </div>
              : null }
              { (accountDropdownOpen && auth) ?
                <div ref={menuRef} className='absolute bg-[#577288] text-white rounded-b-md ml-4 w-min mt-[-20px] ease-in-out duration-500'>
                <NavLink id="user" className="text-ash-grey navbar-nav" to='/logout'>Logout</NavLink>
              </div>
              : null }
          </li>
          <li className='w-full font-bold'>
            <NavLink id="shop" className="text-rose-taupe navbar-nav" to='/products'>Shop</NavLink>
          </li>
          <li className='w-full font-bold'>
            <NavLink id="inspo" className="text-rose-taupe navbar-nav" to='/inspo'>Inspo</NavLink>
          </li>
          {(auth) ? 
          <li className='w-full font-bold'>
            <NavLink to='/dash' className="text-rose-taupe navbar-nav">Dash</NavLink>
          </li> : null}
          {(auth) ? 
          <li className='w-full font-bold'>
            <NavLink id="logout" className="text-rose-taupe navbar-nav" to='/' onClick={handleLogOut}>Logout</NavLink> 
          </li> : null}
          
        </ul>
        <div className={nav ? 'absolute left-0 top-o w-[60%] h-full bg-[#434341] border-r-gray-900 ease-in-out duration-500' : 'md:hidden fixed left-[-100%]'}>
          <ul className='p-4 uppercase'>
            {!(auth) ?
            <li className='p-4 border-b border-gray-600'>
              <NavLink id="user" className="text-rose-taupe navbar-nav" to='/login'>Account<GoChevronDown className='text-rose-taupe' size={20} /></NavLink>
            </li> : null}
            <li className='p-4 border-b border-gray-600'>
              <NavLink id="shop" className="text-rose-taupe navbar-nav" to='/products'>Shop</NavLink>
            </li>
            <li className='p-4 border-b border-gray-600'>
              <NavLink id="inspo" className="text-rose-taupe navbar-nav" to='/inspo'>Inspo</NavLink>
            </li>
            {!(auth) ?
            <li className='p-4 border-b border-gray-600'>
              <NavLink id="register" className="text-rose-taupe navbar-nav" to='/register'>Register</NavLink>
            </li> : null}
            {(auth) ? 
            <li className='p-4 border-b border-gray-600'>
              <NavLink to='/dash' className="text-rose-taupe navbar-nav">Dash</NavLink>
            </li> : null}
            {(auth) ? 
            <li className='p-4 border-b border-gray-600'>
              <NavLink id="logout" className="text-rose-taupe navbar-nav" to='/' onClick={handleLogOut}>Logout</NavLink> 
            </li> : null}
            <Route path='/login' render={() => (auth)
              ? <Redirect to="/dash" />
              : <LoginForm handleLoginSubmit={handleLoginSubmit}/>} />

            <Route path='/register' render={ () => (auth)
              ? <Redirect to="/dash" />
              : <RegisterForm handleRegisterSubmit={handleRegisterSubmit}/>} />
            <Route path='/dash' component={Dashboard} />
            <Route path='/inspo' component={Blog} />
            <Route  path='/products' component={Products} />
          </ul>
        </div>
        <Route path='/login' render={() => (auth)
            ? <Redirect to="/dash" />
            : <LoginForm handleLoginSubmit={handleLoginSubmit}/>} />

          <Route path='/register' render={ () => (auth)
            ? <Redirect to="/dash" />
            : <RegisterForm handleRegisterSubmit={handleRegisterSubmit}/>} />
          <Route path='/dash' component={Dashboard} />
          <Route path='/inspo' component={Blog} />
          <Route  path='/products' component={Products} />
        <Route exact path='/' component={Home} />
      </div>
    </Router>
  )
}
export default Nav;
