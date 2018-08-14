import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  return (
    <div className='navbar'>
    <NavLink to='/'> Home </Navlink>
    //<NavLink to='/about'>About</NavLink>
    //<NavLink to='/login'>Login</NavLink>
    //<NavLink to='/inspo'>Inspo</Navlink>
    <NavLink to='/new'>New Product</NavLink>
    </div>
  );
};
export default NavBar;
