import React, { Component } from "react";
import Input from "./input";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
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
      this.props.history.replace("/");
      this.setState({ account: { username: "", password: "" } });
    } catch (error) {
      console.error("no email mode", error);
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
      <div
        className="container "
        style={{
          width: "500px",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "100px",
        }}
      >
        <h3>I already have an account</h3>

        <form>
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

          <button
            className="btn btn-info mr-5"
            type="submit"
            onClick={this.handleSubmit}
          >
            Login
          </button>
          <button
            className="btn btn-outline-primary"
            type="submit"
            onClick={signInWithGoogle}
          >
            <FcGoogle size="23px" /> Google SignIn
          </button>
          <h6 className="mt-4">
            New User? Click to
            <Link to="/signup"> Register </Link>
          </h6>
        </form>
      </div>
    );
  }
}

export default LoginForm;
