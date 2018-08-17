import './Login.css'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { updateRegisterFormData } from '../actions/registerFormActions';


class RegisterForm extends Component {

handleRegisterSubmit = (event) => {
  event.preventDefault()

}

handleOnChange = (event) => {
  const { name, value } = event.target;
  const currentRegisterData = Object.assign({}, this.props.registerFormData, {
    [name]: value
  })
  this.props.updateRegisterFormData(currentRegisterData)
}

  render() {
    const { email, password } = this.props.registerFormData
    return(

      <div>
      <h3>Register</h3>
        <form className="form-group" onChange={this.handleOnChange} onSubmit={this.handleRegisterSubmit} >

          <label htmlFor="email">Email</label>
          <input className="form-control" type="email" name="email" value={email} />


          <label htmlFor="password">Password</label>
          <input className="form-control" type="text" name="password" value={password} />

          <input type="submit" />
        </form>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    registerFormData: state.registerFormData
  }
}

export default connect(mapStateToProps, { updateRegisterFormData })(RegisterForm);
