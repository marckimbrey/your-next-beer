import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {fetchBeers} from '../../actions/beers';



class BeerSelect extends Component {
  constructor(props) {
    super(props)
      this.props.dispatch(fetchBeers())

  }

  componentDidupDate() {
        this.props.dispatch(fetchBeers())
  }
  getBeerOptions(beers) {
    console.log(beers)
    return beers.map((beer, i) => {
      return <option value={beer} key={i}>{beer.name}  {beer.brewery}</option>
    })
  }
   render() {
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
