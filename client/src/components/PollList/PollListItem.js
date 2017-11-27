import React from 'react';


export default (props) => {
  return(
    <tr>
      <td>{props.poll.pollName}</td>
      <td>{props.poll.user}</td>
    </tr>
  )
}
