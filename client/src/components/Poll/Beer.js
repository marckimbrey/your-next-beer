import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    padding: '10% 10%',
    margin: '10%',
    minWidth: 300,
    textAlign: 'center'
  },
  text: {
    margin: 5,
  }
}

export default (props) => {
  return(
    <Card style={styles.card}>
      <Typography style={styles.text} variant="title">Name: {props.beer.name}</Typography>
      <Typography style={styles.text} variant="subheading">Brewery: {props.beer.brewery}</Typography>
      <Typography style={styles.text} variant="body2">Style: {props.beer.style}</Typography>
      <Typography style={styles.text} variant="body2">Strength: {`${props.beer.strength}%`}</Typography>
      <Typography style={styles.text} variant="body2">Country: {props.beer.country}</Typography>
      <Typography style={styles.text} variant="body2">Votes: {props.beer.votes}</Typography>
      <Button variant="contained" onClick={()=> props.onVote(props.beer)}>Vote</Button>
    </Card>
  )
}
