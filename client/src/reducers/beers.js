const initialBeerState = [{
  _id: '59fed762ecc7437ccf8a9dfe',
  name: 'Gem',
  country: 'uk',
  brewery: 'bath ales',
  style: 'bitter',
  strength: 4.0
}]

export default function beersReducer(state = initialBeerState, action) {
  console.log('fetched beers', state)
  switch(action.type) {

    case 'FETCH_BEERS_FULFILLED':
      console.log('fetched beers', [...state ,  ...action.payload])
      return [...state ,  ...action.payload]

    case 'POST_BEER_FULFILLED':
      console.log('beer added')
      return [...state ,  ...action.payload]
      
    default:
      return state;
  }
}
