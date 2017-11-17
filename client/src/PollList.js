import React from 'react';
import PollListItem from './PollListItem'


export default (props) => {


  return(
    <table>
      <thead>
      <tr>
        <th>Poll Name</th>
        <th>user</th>
      </tr>
    </thead>
    <tbody>
      {props.polls.map((poll, i) => {
        return (
        <PollListItem poll={poll} key={i}/>
        )}
      )}
      </tbody>
    </table>
  )
}
