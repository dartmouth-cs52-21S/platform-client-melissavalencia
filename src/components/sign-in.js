/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signinUser } from '../actions';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  }

  onSubmit = (event) => {
    this.setState({
      email: this.email,
      password: this.password,
    });
    this.props.signinUser(this.state, this.props.history);
  }

  render() {
    return (
      <div className="sign-in-container">
        <div className="header">
          <div id="si-title">Sign In!</div>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input id="input" className="form-control form-control-lg" type="text" onChange={this.handleEmailChange} value={this.state.email} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input id="input" className="form-control" type="text" onChange={this.handlePasswordChange} value={this.state.password} />
        </div>
        <div className="button-container">
          <button type="submit" id="signin-button" onClick={this.onSubmit}>sign in</button>
        </div>
      </div>
    );
  }
}

export default connect(null, { signinUser })(SignIn);
