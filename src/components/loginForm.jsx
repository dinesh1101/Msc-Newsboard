import React, { Component } from "react";
import Input from "./input";
import { auth, signInWithGoogle } from "./firebase";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { username, password } = this.state.account;

    try {
      await auth.signInWithEmailAndPassword(username, password);
      this.setState({ account: { username: "", password: "" } });
    } catch (error) {
      console.error(error);
    }

    console.log("Signed IN");
  };
  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;
    return (
      <div className="container">
        <h4>I already have an account</h4>

        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="Username"
            value={account.username}
            handleChange={this.handleChange}
            type="email"
          />

          <Input
            name="password"
            label="Password"
            value={account.password}
            handleChange={this.handleChange}
            type="password"
          />

          <button className="btn btn-dark mr-5">Login</button>
          <button className="btn btn-info" onClick={signInWithGoogle}>
            Google SignIn
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
