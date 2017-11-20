import React, {Component} from 'react';


export default  class AddBeer extends Component {
  constructor(props) {
    super(props)
    this.state = {formVisable:false}
  }

  toggleForm() {


     this.setState({formVisable: !this.state.formVisable});

  }
  render () {
    let form = null;
    if (this.state.formVisable) {
     form = <form className="add-beer-form" action="/api/beers/add" method="post">
      <div className="form-field">
        <label>Beer Name:</label>
        <input type="text"  name="name" required />
      </div>
      <div className="form-field">
        <label>Country:</label>
        <input type="text"  name="country" required />
      </div>
      <div className="form-field">
        <label>Brewery:</label>
        <input type="text"  name="brewery" required />
      </div>
      <div className="form-field">
        <label>Style:</label>
        <input type="text"  name="style" required />
      </div>
      <div className="form-field">
        <label>strength:</label>
        <input type="text"  name="strength" required />
      </div>
    </form>
  } else {
    form = null
  }
   return(
      <div className="addBeer">
        <button onClick={() => this.toggleForm()}>add Beer</button>
        {form}
      </div>
    )
  }
}
