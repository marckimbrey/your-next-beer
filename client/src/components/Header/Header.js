import React from 'react'
import {NavLink} from 'react-router-dom'
import Login from './Login';
import DisplayUser from './DisplayUser';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const styles = {
  container: {
    display: 'flex',
    listStyle: 'none',
    justifyContent: 'space-between'
  },
  appBar: {
  },
  header: {
     marginRight: 'auto'
  },
  navLink: {
  },
  button: {
    marginRight: 20,
    color: 'white'
    }
}
 export default (props) => {
   let loggedIn;
   let btn;
   if(!props.user.username) {
      loggedIn = <li><Login /></li>;
      btn = <li><NavLink style={styles.navLink} xs={3} to="../register">
        <Button style={styles.button} >Register</Button>
      </NavLink></li>


   } else {
     loggedIn = <li>
       <DisplayUser userName={props.user.username} /></li>;
     btn =  <li><NavLink style={styles.navLink} xs={3} to="../createPoll">
                <Button style={styles.button} >Create Poll</Button>
              </NavLink></li>
   }
   return (
       <AppBar>
         <ul style={styles.container}>
         <li style={styles.header}><Typography variant="display1" xs={6} color="inherit" >
           Your Next Beer
         </Typography></li>
         {loggedIn}
         {btn}
        </ul>
      </AppBar>
   )
 }
