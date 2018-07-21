import React from 'react'
import Login from './Login';

import Typography from '@material-ui/core/Typography';

const styles = {
  username: {
    color: 'white'
  }
}
export default (props) => {
  if (props.userName) {
    return (
      <li><Typography variant="headline" style={styles.username}>Hello {props.userName}</Typography></li>
    )
  } else {
    return (<li><Login /></li>);
  }
}
