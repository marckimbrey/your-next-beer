import React, {Component} from 'react';
import {connect} from 'react-redux';

import {loginUser} from '../../actions/users'


class Login extends Component  {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    };
    this.onInputChange = this.onInputChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  onInputChange(event) {
    let newValue = {};
    newValue[event.target.name] = event.target.value;
    this.setState(Object.assign(this.state,newValue));
  }
  handleFormSubmit(event) {
    if(event) event.preventDefault();
    console.log(this.state)
    this.props.dispatch(loginUser(this.state)).then( response => {

      localStorage.setItem('username', response.value.username)
      localStorage.setItem('token', response.value.token)
    })
  }

  render() {
    return(
      <form action="/api/users/login" method="post" onSubmit={this.handleFormSubmit}>
        <div className="form-field">
          <label>username:</label>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            value={this.state.username}
            onChange={this.onInputChange} required />
        </div>
        <div className="form-field">
          <label>password:</label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={this.state.password}
            onChange={this.onInputChange} required />
        </div>
        <button type="submit">Login</button>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {user: state.user}
}

export default connect(mapStateToProps)(Login)
