import React, {Component} from 'react';
import {connect} from 'react-redux';


import BeersSelect from './BeersSelect';
import AddBeer from './AddBeer'
import {createPoll} from '../../actions/polls';


class CreatePoll extends Component {
  constructor() {
    super()
    this.state = {
      pollName: '',
      beers: []
    };
    this.onInputChange = this.onInputChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  onInputChange(event) {
    let newValue ={};

    if (event.target.name === 'beers') {
       newValue[event.target.name] = this.state.beers.concat(JSON.parse(event.target.value));
    } else {
      newValue[event.target.name] = event.target.value;
    }
    this.setState(...this.state, newValue);
  }
  handleFormSubmit(event) {
    console.log()
    if(event) event.preventDefault();
    const newPoll = {
      pollName: this.state.pollName,
      user: this.props.user.username,
      beers: this.state.beers
    };
    this.props.dispatch(createPoll(newPoll))
  }


  render() {
    return(
      <div>
      <AddBeer />
      <form action="/polls/add" method="post" onSubmit={this.handleFormSubmit}>

        <div className="form-field">
          <label>Poll Name:</label>
          <input
            type="text"
            placeholder="poll name"
            name="pollName"
            value={this.state.pollName}
            onChange={this.onInputChange} required />
        </div>
        <div className="form-field">

          <BeersSelect onSelect={this.onInputChange} beersSelected={this.state.beers} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {user: state.user}
}

export default connect(mapStateToProps)(CreatePoll)
