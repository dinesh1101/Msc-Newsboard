import React, { Component } from "react";
import Input from "./input";
import { Link } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase";

class SignUpForm extends Component {
  state = {
    account: {
      name: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { name, username, password, confirmPassword } = this.state.account;
    if (password !== confirmPassword) {
      alert("password not match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        username,
        password
      );

      await createUserProfileDocument(user, { name });

      this.setState({
        account: {
          name: "",
          username: "",
          password: "",
          confirmPassword: "",
        },
      });
      this.props.history.replace("/");
    } catch (error) {
      console.error("in creating user", error);
    }
    console.log("Registered");
  };

  render() {
    const { account } = this.state;
    return (
      <div
        className="container"
        style={{
          width: "600px",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "50px",
        }}
      >
        <h1>Register</h1>

        <form onSubmit={this.handleSubmit}>
          <Input
            name="name"
            label="Name"
            value={account.name}
            handleChange={this.handleChange}
            type="text"
          />
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
          <Input
            name="confirmPassword"
            label="Confirm Password"
            value={account.confirmPassword}
            handleChange={this.handleChange}
            type="password"
          />

          <button className=" w-100 btn btn-dark mr-5">Register</button>
          <h6 className="mt-4">
            Already have an account?
            <Link to="/login"> SignIn </Link>
            here
          </h6>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
