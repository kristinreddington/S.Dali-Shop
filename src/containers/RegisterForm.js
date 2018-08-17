import { Component } from 'react';
import { connect } from 'react-redux';
import { updateRegisterFormData } from '../actions/registerFormActions';

class RegisterForm extends Component {

handleRegisterSubmit() = (event) {
  event.preventDefault()

}

handleOnChange() = (event) {
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
        <form onChange={this.handleOnChange} onSubmit={this.handleRegisterSubmit} >

          <label htmlFor="email">Email</label>
          <input type="text" name="email" value={email}>

          <label htmlFor="password">Password</label>
          <input type="text" name="password" value={password}>

        </form>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    registerFormData: state.registerFormData
  }
}}

export default connect(mapStateToProps)(RegisterForm);
