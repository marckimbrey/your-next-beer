export const FETCH_POLLS = 'FETCH_POLLS';


export function fetchPolls(url) {
  return {
    type: FETCH_POLLS,
    payload: fetch('/api/polls').then(response => response.json())
  }
}
