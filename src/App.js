import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import LoginForm from "./components/loginForm";
import SignUpForm from "./components/register";
import Crud from "./crud";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { auth } from "./components/firebase";
import Home from "./components/home";

class App extends Component {
  state = { currentUser: null };

  unsubscribeAuth = null;

  componentDidMount() {
    this.unsubscribeAuth = auth.onAuthStateChanged(async (userAuth) => {
      // if (userAuth) {
      //   const userRef = await createUserProfileDocument(userAuth);
      //   userRef.onSnapshot((snapShot) => {
      //     this.setState(
      //       {
      //         currentUser: {
      //           id: snapShot.id,
      //           ...snapShot.data(),
      //         },
      //       },
      //       () => console.log("current user is", this.state.currentUser.name)
      //     );
      //   });
      // }
      this.setState({ currentUser: userAuth });
      // console.log(this.state.currentUser.email);
    });
  }

  componentWillUnmount() {
    this.unsubscribeAuth();
  }
  render() {
    return (
      <React.Fragment>
        <Switch>
          {/* <Crud /> */}
          <Route
            path="/"
            exact
            render={(props) => (
              <Home currentUser={this.state.currentUser} {...props} />
            )}
          />
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignUpForm} />

          <Home />
        </Switch>
      </React.Fragment>
    );
  }
}
export default App;
