import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class Poll extends Component {

  render() {
    let poll;
    let beers =[];
    if(this.props.polls.length > 0) {
      poll = this.props.polls.filter((poll)=> {
         return (poll._id == this.props.match.params.id)
       })[0];


        beers = poll.beers.map((beer, i) => {
           return (
             <div key={i}>
               <h5>Name: {beer.name}</h5>
               <p>Brewery: {beer.brewery}</p>
               <p>Style: {beer.style}</p>
               <p>Strength: {`${beer.strength}%`}</p>
               <p>Country: {beer.country}</p>
               <p>Votes: {beer.votes}</p>
             </div>
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
