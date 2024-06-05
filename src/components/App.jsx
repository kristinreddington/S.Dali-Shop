import React, { Component } from 'react';
import Nav from '../containers/Nav'
import Footer from '../containers/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <hr></hr>
        <Footer/>
      </div>
      )
    }
  }
export default App;
