import React, { Component } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
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
            () => console.log(this.state)
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
    //const history = useHistory();
    return (
      <React.Fragment>
        <Home currentUser={this.state.currentUser} />
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignUpForm} />
          <Route path="/" exact component={Home} />
        </Switch>
      </React.Fragment>
    );
  }
}
export default App;
