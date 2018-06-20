import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {vote} from '../../actions/polls';

import Beer from './Beer';


const styles = {
  div: {
    marginTop: 100
  }
}

class Poll extends Component {

  constructor(props) {
    super(props)
    this.onVote = this.onVote.bind(this);
    this.state = {}
  }

  componentDidMount(props) {

    let poll;
    if(this.props.polls.length > 0) {
      poll = this.props.polls.filter((poll)=> {
         return (poll._id === this.props.match.params.id)
       })[0];
           this.setState({poll: poll, beers: poll.beers});
    }
  }

  onVote(updatedBeer) {
    const newBeers = this.state.poll.beers.map((beer, i) => {
      if (beer._id === updatedBeer._id) {
        updatedBeer.votes++;
        return  updatedBeer
      }
      return beer
    });
    const newPoll = Object.assign(this.state.poll, {beers: newBeers});
    this.props.dispatch(vote(newPoll));
    this.setState({
      poll: newPoll,
      beer: newBeers })
  }

  render() {

    let beers =[];
    if(this.state.poll) {
      beers = this.state.beers.map((beer, i) => {
         return (
          <Beer beer={beer} key={i} onVote={this.onVote}/>
         )
      });
      return(<div style={styles.div}>
        <h4>{this.state.poll.pollName}</h4>
        <h5>{this.state.poll.user}</h5>
        {beers}
      </div>)
    }
      return (<div style={styles.div}>Loading...</div>)
  }
}

function mapStateToProps(state) {
 return {polls: state.polls};
}

export default connect(mapStateToProps)(Poll);
