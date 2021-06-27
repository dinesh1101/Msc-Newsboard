import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import LoginForm from "./components/loginForm";
import SignUpForm from "./components/register";
import "bootstrap/dist/css/bootstrap.css";
import { auth, createUserProfileDocument } from "./components/firebase";
import Home from "./components/home";

class App extends Component {
  state = { currentUser: null };

  unsubscribeAuth = null;

  componentDidMount() {
    this.unsubscribeAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            },
            () => console.log("current user is", this.state.currentUser.name)
          );
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeAuth();
  }
  render() {
    return (
      <React.Fragment>
        <Switch>
          {/* <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignUpForm} />
          <Route
            path="/"
            exact
            render={(props) => (
              <Home currentUser={this.state.currentUser} {...props} />
            )}
          /> */}
          <Home />
        </Switch>
      </React.Fragment>
    );
  }
}
export default App;
