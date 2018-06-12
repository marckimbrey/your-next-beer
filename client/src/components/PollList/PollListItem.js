import React from 'react';
import { Link } from 'react-router-dom'


export default (props) => {
  return(
    <tr >
      <td><Link to={`/${props.poll._id}`}>{props.poll.pollName}</Link></td>
      <td>{props.poll.user}</td>
    </tr>
  )
}
