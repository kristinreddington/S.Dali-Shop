import React, { Component } from 'react';
import { connect } from 'react-redux';
import Auth from '../helpers/Auth'
import './Dash.css'

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      email: null,
      cart: [],
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/profile', {
      method: 'GET',
      headers: {
        token: Auth.getToken(),
        Authorization: `Token ${Auth.getToken()}`
      }
    }).then(res =>  res.json())
      .then(res => {
        this.setState({
          email: res.user.email,
          cart: res.user.cart
        })
      }).catch(error => console.log(error))
  }

  render(){
    return(
      <div>
        <h3>Welcome!</h3>
        <p>{this.state.email}</p>
        <p>{this.state.cart.map( line_item => <p> {line_item.product_name}</p>)}</p>
      </div>
    )
  }
}

export default (Dashboard);
