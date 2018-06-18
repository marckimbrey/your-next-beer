import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

export default (props) => {
  return(
    <Card>
      <h5>Name: {props.beer.name}</h5>
      <p>Brewery: {props.beer.brewery}</p>
      <p>Style: {props.beer.style}</p>
      <p>Strength: {`${props.beer.strength}%`}</p>
      <p>Country: {props.beer.country}</p>
      <p>Votes: {props.beer.votes}</p>
      <Button onClick={()=> props.onVote(props.beer)}>Vote</Button>
    </Card>
  )
}
