import React from 'react';
import { Link } from 'react-router-dom'

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const styles = {
  link: {
    textDecoration: 'none',
    color: 'black'
  },
  cell: {
    fontSize: '1.0rem'
  }
}

export default (props) => {
  const bgColor = props.i % 2? 'white' : '#bbf';
  console.log(bgColor)
  return(
    <TableRow style={{backgroundColor: bgColor}} >
      <TableCell style={styles.cell}>
        <Link to={`/poll/${props.poll._id}`} style={styles.link}>
          {props.poll.pollName}
        </Link>
      </TableCell>
      <TableCell style={styles.cell}>{props.poll.user}</TableCell>
    </TableRow>
  )
}
