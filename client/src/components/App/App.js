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


class App extends Component {
  constructor() {
    super()
    //this.state = {polls: [{pollName: 'not loaded from server', user: 'none'}]}
  }
  componentDidMount() {

  //   fetch('/api/polls')
  //     .then(res =>
  //       res.json()).then( data =>
  //         this.setState({polls: data}))
  // }
  this.props.dispatch(fetchPolls())
  }
   render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/'  render={(props) => (
            <PollList {...props} polls={this.props.polls} />
          )}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>

        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {polls: state.polls};
}

export default connect(mapStateToProps)(App);
