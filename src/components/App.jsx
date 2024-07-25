import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, NavLink, Redirect, Switch} from 'react-router-dom';
import Nav from '../containers/Nav'
import Footer from '../containers/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <div className='min-h-[100vh] flex-1'>
        <Nav />
        <br/><br/>
        </div>
       
        <div>
        <Footer/>
        </div>
      </div>
      )
    }
  }
export default App;
