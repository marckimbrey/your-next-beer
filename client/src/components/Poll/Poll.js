import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {vote} from '../../actions/polls';

import Beer from './Beer';


class Poll extends Component {

  constructor(props) {
    super(props)
    this.onVote = this.onVote.bind(this);
  }

  onVote(updatedBeer) {
    this.poll.beers = this.poll.beers.map((beer, i) => {
      if (beer._id === updatedBeer._id) {
        updatedBeer.votes++;
        return  updatedBeer
      }
      return beer
    });
    console.log(this.poll.beers);
    this.props.dispatch(vote(this.poll))
  }

  render() {
    let poll;
    let beers =[];
    if(this.props.polls.length > 0) {
      poll = this.props.polls.filter((poll)=> {
         return (poll._id === this.props.match.params.id)
       })[0];
       this.poll = poll;
        beers = poll.beers.map((beer, i) => {
           return (
            <Beer beer={beer} key={i} onVote={this.onVote}/>
           )
        });

        return(<div>
          <h4>{poll.pollName}</h4>
          <h5>{poll.user}</h5>
          {beers}
        </div>)
    }
      return (<div>Loading...</div>)
  }
}

function mapStateToProps(state) {
 return {polls: state.polls};
}

export default connect(mapStateToProps)(Poll);
