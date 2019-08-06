import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Signup from "./Signup";
import NotFound from "./404";
import DogList from "./DogList";

class Root extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      loggedIn: false,
      token: ""
    };
  }

  getToken = (email, loggedIn, token) => {
    this.setState({
      email: email,
      loggedIn: loggedIn,
      token: token
    });
  };

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={props =>
            this.state.loggedIn ? (
              <Redirect to="/feed/husky" />
            ) : (
              <Signup {...props} onLogin={this.getToken} />
            )
          }
        />
        <Route
          path="/feed"
          render={props =>
            this.state.loggedIn ? (
              <DogList {...props} token={this.state.token} />
            ) : (
              <Redirect to="/" />
            )
          }
        />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Root;

