import React, { Component } from 'react';
import Nav from '../containers/Nav'
import Footer from '../containers/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <div className='flex-1'>
        <Nav />
        <hr></hr><br/><br/>
        </div>
       
        <div>
        <Footer/>
        </div>
      </div>
      )
    }
  }
export default App;
