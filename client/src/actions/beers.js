export const FETCH_BEERS = 'FETCH_BEERS';


export function fetchBeers(url) {
  return {
    type: FETCH_BEERS,
    payload: fetch('/api/beers').then(response => response.json())
  }
}
