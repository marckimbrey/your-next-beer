import React from 'react';
import { Link } from 'react-router-dom'

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


export default (props) => {
  return(
    <TableRow >
      <TableCell><Link to={`/poll/${props.poll._id}`}>{props.poll.pollName}</Link></TableCell>
      <TableCell>{props.poll.user}</TableCell>
    </TableRow>
  )
}
