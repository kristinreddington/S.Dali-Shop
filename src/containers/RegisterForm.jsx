import './Login.css'
import React, { Component } from 'react'
//import { connect } from 'react-redux';
//import { updateRegisterFormData } from '../actions/registerFormActions';
//import { createUser } from '../actions/userActions';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.handleOnChange = this.handleOnChange.bind(this)
  }

handleOnChange = (event) => {
  const name = event.target.name;
  const value = event.target.value;
  this.setState({
    [name]: value,
  });

}

  render() {
    //const { email, password } = this.props.registerFormData
    return(

      <div>

        <form className="form-group"
        onSubmit={(e) =>
          this.props.handleRegisterSubmit(e, this.state)}
          >

          <label htmlFor="email">Email</label>
          <input className="form-control" type="email" name="email"
          value={this.state.email} onChange={this.handleOnChange} />


          <label htmlFor="password">Password</label>
          <input className="form-control" type="password" name="password"
          value={this.state.password} onChange={this.handleOnChange} /><br/>
          <button className='bg-[#9ecfca] w-[150px] max-h-[50px] rounded-md font-medium mx-auto py-2 text-rose-taupe' type="submit">Submit</button>
        </form>
      </div>
    )
  }

}

export default RegisterForm;
