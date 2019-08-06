import React, { Component } from 'react';

import { Title, Input, Form, Wrapper } from "../styles";

class Singup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ""
    };
  }

  handleKeyDown = e => {
    const regexp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (regexp.test(e.target.value)) {
      this.handleLogin(e);
    }
  };

  handleLogin = e => {
    e.preventDefault();
    this.props.onLogin(e.target.value);
    this.setState({ email: e.target.value });
  };

  render() {
    return (
      <main>
        <Wrapper>
          <Title>
            The <strong>IDdog</strong>
          </Title>
          <Form onSubmit={this.handleLogin}>
            <div className="nes-field">
              <label className="hidden">Your email</label>
              <Input
                placeholder="Your email"
                type="email"
                id="email"
                onChange={this.handleKeyDown}
                required
              />
            </div>
          </Form>
        </Wrapper>
      </main>
    );
  }
}

export default Singup;