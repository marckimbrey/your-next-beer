import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
 import InputLabel from '@material-ui/core/InputLabel';

import {loginUser} from '../../actions/users'

const styles = {
  form: {
    marginRight: 50,
    color:'white'
  },
  input: {
    display: 'inline-block',
    margin: 10,
    color: 'white'
  }

}
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
      <form
        action="/api/users/login"
        method="post"
        onSubmit={this.handleFormSubmit}
        style={styles.form}>
          <Input
            type="text"
            placeholder="Enter Username"
            name="username"
            style={styles.input}
            value={this.state.username}
            onChange={this.onInputChange} required />
          <Input
            type="password"
            placeholder="Enter Password"
            name="password"
            style={styles.input}
            value={this.state.password}
            onChange={this.onInputChange} required />
        <Button type="submit" variant="contained">Login</Button>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {user: state.user}
}

export default connect(mapStateToProps)(Login)
