import React from 'react';

import BeersSelect from './BeersSelect'


export default () => {
  return(
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
  )
}
