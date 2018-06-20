import React, {Component} from 'react';
import {connect} from 'react-redux';


import BeersSelect from './BeersSelect';
import AddBeer from './AddBeer'
import {createPoll} from '../../actions/polls';

import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
 import InputLabel from '@material-ui/core/InputLabel';

const styles = {
  container: {
    marginTop: 100
  }
}

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
      <div style={styles.container}>
      <AddBeer />
      <form action="/polls/add" method="post" onSubmit={this.handleFormSubmit}>

        <div className="form-field">
          <InputLabel>Poll Name:</InputLabel>
          <Input
            type="text"
            placeholder="poll name"
            name="pollName"
            value={this.state.pollName}
            onChange={this.onInputChange} required />
        </div>
        <div className="form-field">

          <BeersSelect onSelect={this.onInputChange} beersSelected={this.state.beers} />
        </div>
        <Button variant="contained" type="submit">Submit</Button>
      </form>
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {user: state.user}
}

export default connect(mapStateToProps)(CreatePoll)
