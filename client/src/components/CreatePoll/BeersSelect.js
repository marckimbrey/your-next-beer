import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {fetchBeers} from '../../actions/beers';



class BeerSelect extends Component {
  constructor(props) {
    super(props)


  }
  componentDidMount() {
          this.props.dispatch(fetchBeers())
  }


  getBeerOptions(beers) {
    return beers.map((beer, i) => {
      return <option value={beer} key={i}>{beer.name}  {beer.brewery}</option>
    })
  }
   render() {
     console.log('beers', this.props)
    return (
      <select multiple="" name="beers" >

          {this.getBeerOptions(this.props.beers)}

      </select>
    );
  }
}

function mapStateToProps(state) {
  return {beers: state.beers};
}

export default connect(mapStateToProps)(BeerSelect);
