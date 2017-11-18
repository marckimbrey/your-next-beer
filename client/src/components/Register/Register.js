import React from 'react';


export default () => {
  return(
    <form action="/api/register" method="post">
      <div className="form-field">
        <label>username:</label>
        <input type="text" placeholder="Enter Username" name="username" required />
      </div>
      <div className="form-field">
        <label>email:</label>
        <input type="email" placeholder="Enter Email" name="email" required />
      </div>
      <div className="form-field">
        <label>password:</label>
        <input type="password" placeholder="Enter Password" name="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  )
}
