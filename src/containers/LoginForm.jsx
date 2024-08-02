import React, { Component } from "react";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="w-100% mt-[30px] w-full mx-auto py-4 flex flex-col justify-center">
        <form
          className="m-12 form-group"
          onSubmit={(e) => this.props.handleLoginSubmit(e, this.state)}
        >
          <span className="mx-auto block uppercase leading-1.2 tracking-widest text-xl text-gray-300">
            Log In
          </span>

          <label className="mt-[15px] text-gray-300" htmlFor="email">
            Email
          </label>
          <input
            className="text-sm rounded bg-pearl text-rose-taupe border-solid border-[1px] border-black tracking-wide mx-0 w-auto py-0 px-[15px] align-top"
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleOnChange}
          />
          <label className="mt-[15px] text-gray-300" htmlFor="password">
            Password
          </label>
          <input
            className="text-sm rounded bg-pearl text-rose-taupe border-solid border-[1px] border-black tracking-wide mx-0 w-auto py-0 px-[15px] align-top"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleOnChange}
          />
          <br />

          <button
            className="bg-black w-[150px] max-h-[50px] rounded-md font-medium mx-auto py-2 text-rose-taupe"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
