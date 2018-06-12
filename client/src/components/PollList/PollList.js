import React from 'react';
import PollListItem from './PollListItem'


export default (props) => {
  console.log(props)
  const pollList = props.polls.map((poll, i) => {
    return (
      <PollListItem poll={poll} key={i}/>
    )}
  )
  return(
    <table>
      <thead>
      <tr>
        <th>Poll Name</th>
        <th>user</th>
      </tr>
    </thead>
      <tbody>
        {pollList}
      </tbody>
    </table>
  )
}
