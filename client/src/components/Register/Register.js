import React, { Component } from 'react';
import { connect } from 'react-redux';

import {registerUser} from '../../actions/users'

class Register extends Component  {

  constructor() {
    super()
    this.state = {
      username: '',
      email: '',
      password: ''
    }
      this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }

  handleNameChange = (event) => {
    this.setState({...this.state,  username: event.target.value} );
  }
  handleEmailChange = (event) => {
    this.setState({...this.state,  email: event.target.value});
  }
  handlePasswordChange = (event) => {
    this.setState({...this.state,  password: event.target.value});
  }

  handleFormSubmit(event) {
    if(event) event.preventDefault();
    this.props.dispatch(registerUser(this.state))
  }

  render() {
    return(
      <form action="/api/users/register" onSubmit={this.handleFormSubmit} method="post">
        <div className="form-field">
          <label>username:</label>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            value={this.state.username}
            onChange={this.handleNameChange} required />
        </div>
        <div className="form-field">
          <label>email:</label>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={this.state.email}
            onChange={this.handleEmailChange} required />
        </div>
        <div className="form-field">
          <label>password:</label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}required />
        </div>
        <button type="submit">Register</button>
      </form>
    )
  }
}
function mapStateToProps(state) {
  return {authenticated: state.athenticated}
}

export default connect(mapStateToProps)(Register)
