import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {fetchPolls} from '../../actions/polls';

import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Login from '../Login/Login'
import Register from '../Register/Register'
import PollList from '../PollList/PollList'
import CreatePoll from '../CreatePoll/CreatePoll'
import Poll from '../Poll/Poll'
import Header from '../Header/Header'


class App extends Component {
  constructor() {
    super()

  }
  componentWillMount() {

    this.props.dispatch(fetchPolls())
    // on app load check if username in localStorage
    if(window.localStorage.getItem('username')) {

    }
  }
   render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path='/'  render={(props) => (
            <PollList {...props} polls={this.props.polls} />
          )}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route path='/createpoll' component={CreatePoll}/>
          <Route path='/poll/:id' component={Poll}/>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {polls: state.polls};
}

export default connect(mapStateToProps)(App);
