import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {NavLink} from 'react-router-dom'
import DisplayUser from './DisplayUser';
import {logoutUser} from '../../actions/users';

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

   let btn = [];
   if(!props.user.username) {
      btn.push(<li><NavLink style={styles.navLink} xs={3} to="../register">
        <Button style={styles.button} >Register</Button>
      </NavLink></li>)


   } else {

     btn.push(<li><NavLink style={styles.navLink} xs={3} to="../createPoll">
                <Button style={styles.button} >Create Poll</Button>
              </NavLink></li>)
    btn.push(<li>
               <Button
                 style={styles.button}
                 onClick={()=> {props.dispatch(logoutUser())}}
                 >Logout</Button>
             </li>)
   }
   return (
       <AppBar>
         <ul style={styles.container}>
         <li style={styles.header}><Typography variant="display1" xs={6} color="inherit" >
           Your Next Beer
         </Typography></li>
        <DisplayUser userName={props.user.username} />
         {btn}
        </ul>
      </AppBar>
   )
 }
