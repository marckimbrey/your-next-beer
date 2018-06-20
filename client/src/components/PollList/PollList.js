import React from 'react';
import PollListItem from './PollListItem'

import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

export default (props) => {

  const styles = {
    grid: {
      margin: 100
    },
    table: {
      marginTop: 50
    }
  }

  const pollList = props.polls.map((poll, i) => {
    return (
      <PollListItem poll={poll} key={i} i={i}/>
    )}
  )
  return(
    <Grid style={styles.grid} item sm={10} md={8} lg={6}>
      <Table style={styles.table} >
        <TableHead>
        <TableRow>
          <TableCell>Poll Name</TableCell>
          <TableCell>user</TableCell>
        </TableRow>
      </TableHead>
        <TableBody>
          {pollList}
        </TableBody>
      </Table>
    </Grid>
  )
}
