import React from 'react'

import Typography from '@material-ui/core/Typography';

const styles = {
  username: {
    color: 'white'
  }
}
export default (props) => {
  return (
    <Typography variant="headline" style={styles.username}>Hello {props.userName}</Typography>
  )
}
