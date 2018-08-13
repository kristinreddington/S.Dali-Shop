import React, { Component } from 'react';
import './App.css'
import Products from '../containers/Products'


class App extends Component {
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Products />
      </div>
    )
  }
}

export default App;
