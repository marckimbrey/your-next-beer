const initialBeerState = [{
  _id: '59fed762ecc7437ccf8a9dfe',
  name: 'Gem',
  country: 'uk',
  brewery: 'bath ales',
  style: 'bitter',
  strength: 4.0
}]

export  function fetchbeers(state = initialBeerState, action) {
  console.log('fetched beers', action)
  switch(action.type) {
    case 'FETCH_BEERS_FULFILLED':
      console.log('fetched beers')
      return [...state ,  ...action.payload]
    default:
      return state;
  }
}

export  function postbeer(state = {}, action) {
  console.log('posted beer', action)
  switch(action.type) {
    case 'POST_BEER_FULFILLED':
      console.log('beer added')
      return [...state ,  ...action.payload]
    default:
      return state;
  }
}
