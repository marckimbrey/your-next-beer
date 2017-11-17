import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Login from './Login'
import Register from './Register'
import PollList from './PollList'


class App extends Component {
  constructor() {
    super()
    this.state = {polls: [{pollName: 'not loaded from server', user: 'none'}]}
  }
  componentDidMount() {

    fetch('/api/polls')
      .then(res =>
        res.json()).then( data =>
          this.setState({polls: data}))
  }
   render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/'  render={(props) => (
    <PollList {...props} polls={this.state.polls} />
  )}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>

        </div>
      </Router>
    );
  }
}

export default App;
