export const FETCH_POLLS = 'FETCH_POLLS';
export const CREATE_POLL = 'CREATE_POLL';


export function fetchPolls() {
  return {
    type: FETCH_POLLS,
    payload: fetch('/api/polls').then(response => response.json())
  }
}

export function createPoll(data) {
  console.log('createPoll', data)
  return {
    type: CREATE_POLL,
    payload: fetch('/api/polls/add',
      {method: 'POST', headers: {"Content-Type": "application/json" },
      body: JSON.stringify(data)})
      .then(response => response.json())
  }
}
