import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {postBeer} from '../../actions/beers';

import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';


class AddBeer extends Component {
  constructor() {
    super()
    this.state = {
      formVisable:false,
      formData: {
        name: "",
        country: "",
        brewery: "",
        style: "",
        strength: ""
      }
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  toggleForm() {


     this.setState({formVisable: !this.state.formVisable});

  }

  handleNameChange = (event) => {
    this.setState({ formData: {...this.state.formData,  name: event.target.value} });
  }
  handleCountryChange = (event) => {
    this.setState({ formData: {...this.state.formData,country: event.target.value} });
  }
  handleBreweryChange = (event) => {
    this.setState({ formData: {...this.state.formData, brewery: event.target.value} });
  }
  handleStyleChange = (event) => {
    this.setState({ formData: {...this.state.formData, style: event.target.value} });
  }
  handleStrengthChange = (event) => {
    this.setState({ formData: {...this.state.formData,strength: event.target.value} });
  }
  handleFormSubmit(event) {
    if(event) event.preventDefault();
    this.props.dispatch(postBeer(this.state.formData))

  }

  render () {
    let form = null;
    if (this.state.formVisable) {
     form = <form className="add-beer-form" ref="formData"  onSubmit={this.handleFormSubmit}>
      <div className="form-field">
        <InputLabel>Beer Name:</InputLabel>
        <Input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleNameChange} required />
      </div>
      <div className="form-field">
        <InputLabel>Country:</InputLabel>
        <Input
          type="text"
          name="country"
          value={this.state.country}
          onChange={this.handleCountryChange} required />
      </div>
      <div className="form-field">
        <InputLabel>Brewery:</InputLabel>
        <Input
          type="text"
           name="brewery"
           value={this.state.brewery}
           onChange={this.handleBreweryChange} required />
      </div>
      <div className="form-field">
        <InputLabel>Style:</InputLabel>
        <Input
          type="text"
          name="style"
          value={this.state.style}
          onChange={this.handleStyleChange} required />
      </div>
      <div className="form-field">
        <InputLabel>strength:</InputLabel>
        <Input
          type="text"
          name="strength"
          value={this.state.strength}
          onChange={this.handleStrengthChange} required />
      </div>
      <Button variant='contained' type='submit'>Add Beer</Button>
    </form>
  } else {
    form = null
  }
   return(
      <div className="addBeer">
        <Button variant='contained' onClick={() => this.toggleForm()}>add Beer</Button>
        {form}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {beers: state.beers}
}




export default connect(mapStateToProps)(AddBeer)
