import React, { Component } from 'react';
// import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
// import { connect } from 'react-redux';
import './Login.css'

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
    this.handleOnChange = this.handleOnChange.bind(this)
  }

  handleOnChange = (event) => {
    const name = event.target.name
    const value = event.target.value

    this.setState({
      [name]: value
    });
  }

  render() {
    return(
      <div>
      <h3>Log In</h3>

        <form className="form-group"
        onSubmit={(e) =>
          this.props.handleLoginSubmit(e, this.state)}
          >

          <label htmlFor="email">Email</label>
          <input className="form-control" type="email" name="email"
          value={this.state.email} onChange={this.handleOnChange} />


          <label htmlFor="password">Password</label>
          <input className="form-control" type="password" name="password"
          value={this.state.password} onChange={this.handleOnChange} />

          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default LoginForm;
