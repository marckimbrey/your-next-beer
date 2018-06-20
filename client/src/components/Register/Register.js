import React, { Component } from 'react';
import { connect } from 'react-redux';

import {registerUser} from '../../actions/users';

import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

const styles = {
  form: {
    marginTop: '10%'
  },
  formField: {
    margin: 10
  },
  submitBtn: {
    marginTop: 10
  }
}

class Register extends Component  {

  constructor() {
    super()
    this.state = {
      username: '',
      email: '',
      password: ''
    }
    this.onInputChange = this.onInputChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }
  onInputChange(event) {
    let newValue = {};
    newValue[event.target.name] = event.target.value;
    this.setState({...this.state,  newValue});
  }


  handleFormSubmit(event) {
    if(event) event.preventDefault();
    this.props.dispatch(registerUser(this.state)).then( response => {

      localStorage.setItem('username', response.value.username)
      localStorage.setItem('token', response.value.token)
    })
  }

  render() {
    return(
      <form
        action="/api/users/register"
        onSubmit={this.handleFormSubmit}
        method="post"
        style={styles.form}>
        <div className="form-field" style={styles.formField}>
          <InputLabel>username: </InputLabel>
          <Input
            type="text"
            placeholder="Enter Username"
            name="username"
            value={this.state.username}
            onChange={this.onInputChange} required />
        </div>
        <div className="form-field" style={styles.formField}>
          <InputLabel>email: </InputLabel>
          <Input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={this.state.email}
            onChange={this.onInputChange} required />
        </div>
        <div className="form-field" style={styles.formField}>
          <InputLabel>password: </InputLabel>
          <Input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={this.state.password}
            onChange={this.onInputChange}required />
        </div>
        <Button
          variant="contained"
          type="submit"
          style={styles.submitBtn}>Register</Button>
      </form>
    )
  }
}
function mapStateToProps(state) {
  return {user: state.user}
}

export default connect(mapStateToProps)(Register)
