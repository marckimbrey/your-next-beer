import React from 'react';

export default (props) => {
  return(
    <div>
      <h5>Name: {props.beer.name}</h5>
      <p>Brewery: {props.beer.brewery}</p>
      <p>Style: {props.beer.style}</p>
      <p>Strength: {`${props.beer.strength}%`}</p>
      <p>Country: {props.beer.country}</p>
      <p>Votes: {props.beer.votes}</p>
    </div>
  )
}
