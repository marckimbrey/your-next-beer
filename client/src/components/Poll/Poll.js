import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';



export default (props) => {
  let poll
  let beers
  console.log(props.polls)
  let pollData;
     if(props.polls.filter((poll)=> {
       return (poll._id == props.match.params.id)
     })[0]) {
     const poll = props.polls.filter((poll)=> {
       console.log(poll._id, props.match.params.id)
       return (poll._id == props.match.params.id)
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
    pollData += beers;
   }

  return (
    <div>
      {beers}
    </div>
  )

}
// class Poll extends Component {

//   constructor(props) {
//     super(props)
//
//     this.state = {
//       poll:
//     }
//     // if(this.props.match.params.id) {
//     //   this.poll = this.props.polls.filter((poll)=> {
//     //     console.log(poll._id, this.props.match.params.id,this.props)
//     //     return (poll._id == this.props.match.params.id)
//     //   })[0];
//     //   console.log(this.props, this.poll)
//     //     this.beers = this.poll.beers.map((beer, i) => {
//     //     console.log('beer',beer)
//     //      return (
//     //        <div key={i}>
//     //          <h5>Name: {beer.name}</h5>
//     //          <p>Brewery: {beer.brewery}</p>
//     //          <p>Style: {beer.style}</p>
//     //          <p>Strength: {`${beer.strength}%`}</p>
//     //          <p>Country: {beer.country}</p>
//     //          <p>Votes: {beer.votes}</p>
//     //        </div>
//     //      )
//     //     })
//     // }
//   }
//
//
//  render() {
//        console.log(this.props.polls)
//    const poll = this.props.polls.filter((poll)=> {
//      console.log(poll._id, this.props.match.params.id,this.props)
//      return (poll._id == this.props.match.params.id)
//    })[0];
//      const beers = poll.beers.map((beer, i) => {
//      console.log('beer',beer)
//       return (
//         <div key={i}>
//           <h5>Name: {beer.name}</h5>
//           <p>Brewery: {beer.brewery}</p>
//           <p>Style: {beer.style}</p>
//           <p>Strength: {`${beer.strength}%`}</p>
//           <p>Country: {beer.country}</p>
//           <p>Votes: {beer.votes}</p>
//         </div>
//       )
//     });
//
//   return (
//     <div>
//       <h4>{poll.pollName}</h4>
//       <h5>{poll.user}</h5>
//       {beers}
//     </div>
//     );
//   }
// }
//
// function mapStateToProps(state) {
//   return {polls: state.polls};
// }
//
// export default connect(mapStateToProps)(Poll);
