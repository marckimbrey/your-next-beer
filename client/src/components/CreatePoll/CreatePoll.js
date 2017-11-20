import React from 'react';

import BeersSelect from './BeersSelect';
import AddBeer from './AddBeer'


export default () => {
  return(
    <div>
    <AddBeer />
    <form action="/polls/add" method="post">

      <div className="form-field">
        <label>Poll Name:</label>
        <input type="text" placeholder="poll name" name="pollName" required />
      </div>
      <div className="form-field">

        <BeersSelect />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
  )
}
