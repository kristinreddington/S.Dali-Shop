import React, { Component } from 'react';
import Auth from '../helpers/Auth'
import './Dash.css'

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      email: null,
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
        })
      }).catch(error => console.log(error))
  }

  render(){
    return(
      <div>
        <p>{this.state.email}</p> 
      </div>
    )
  }
}

export default Dashboard;
