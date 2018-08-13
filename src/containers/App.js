import React, { Component } from 'react';
import './App.css'
import Products from './Products'

// const API_URL = process.env.REACT_APP_API_URL; 

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      products: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/products')
    .then(res => res.json())
    .then(products => this.setState({ products }))
  }
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Products products={this.state.products}/>
      </div>
    )
  }
}

export default App;
