export const FETCH_BEERS = 'FETCH_BEERS';
export const POST_BEER = 'POST_BEER';


export function fetchBeers(url) {
  return {
    type: FETCH_BEERS,
    payload: fetch('/api/beers').then(response => response.json())
  }
}

export function postBeer(newBeer) {
  console.log(newBeer )
  return {
    type: POST_BEER,
    payload: fetch('/api/beers/add',
    {method: 'POST', headers: {"Content-Type": "application/json" }
    , body: JSON.stringify(newBeer)})
    .then(response => {
      console.log(response)
    response.json()})
  }
}
