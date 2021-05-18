/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signupUser } from '../actions';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      username: '',
    };
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  }

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  }

  onSubmit = (event) => {
    // this.setState({
    //   email: this.email,
    //   password: this.password,
    //   username: this.username,
    // });
    console.log(this.state);
    this.props.signupUser(this.state, this.props.history);
  }

  render() {
    return (
      <div className="sign-up-container">
        <div className="header">
          <div id="su-title">Sign Up!</div>
        </div>
        <div className="form-group">
          <label>Username</label>
          <input id="input" className="form-control form-control-lg" type="text" onChange={this.handleUsernameChange} value={this.state.username} />
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
          <button type="submit" id="signup-button" onClick={this.onSubmit}>sign up!</button>
        </div>
      </div>
    );
  }
}

export default connect(null, { signupUser })(SignUp);
