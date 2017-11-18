
export default function fetchPolls(state = {polls: [{pollName: 'not loaded from server', user: 'none'}]}, action) {
  console.log('fetched polls', action)
  switch(action.type) {
    case 'FETCH_POLLS_FULFILLED':
      console.log('fetched polls')
      return {...state , polls: action.payload}
    default:
      return state;
  }
}
