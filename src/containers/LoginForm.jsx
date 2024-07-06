import React, { Component } from 'react';
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
        <form className="form-group"
        onSubmit={(e) =>
          this.props.handleLoginSubmit(e, this.state)}
          >
      <span className='mx-auto block uppercase leading-1.2 tracking-widest text-xl text-gray-300'>Log In</span>

          <label className='text-gray-300' htmlFor="email">Email</label>
          <input className="form-control" type="email" name="email"
          value={this.state.email} onChange={this.handleOnChange} />


          <label className='text-gray-300' htmlFor="password">Password</label>
          <input className="form-control" type="password" name="password"
          value={this.state.password} onChange={this.handleOnChange} /><br/>

          <button className='bg-[#9ecfca] w-[150px] max-h-[50px] rounded-md font-medium mx-auto py-2 text-rose-taupe' type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default LoginForm;
