import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {fetchBeers} from '../../actions/beers';

import Select from '@material-ui/core/Select';




class BeerSelect extends Component {
  constructor(props) {
    super(props)
    console.log(this.props.beersSelected)
  }
  componentDidMount() {
          this.props.dispatch(fetchBeers())
  }


  getBeerOptions(beers) {
    return beers.map((beer, i) => {
      return <option value={JSON.stringify(beer)} key={i}>{beer.name}  {beer.brewery}</option>
    })
  }
   render() {
    return (
      <Select
        native
        multiple={true}
        value={this.props.beersSelected}
        onChange={this.props.onSelect}
        name="beers" >

          {this.getBeerOptions(this.props.beers)}

      </Select>
    );
  }
}

function mapStateToProps(state) {
  return {beers: state.beers};
}

export default connect(mapStateToProps)(BeerSelect);
