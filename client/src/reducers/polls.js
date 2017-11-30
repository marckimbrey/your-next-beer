
export default function fetchPolls(state = {polls: [{pollName: 'not loaded from server', user: 'none'}]}, action) {
  switch(action.type) {
    case 'FETCH_POLLS_FULFILLED':
      console.log('fetched polls')
      return {...state , ...{polls: action.payload}}

    case 'CREATE_POLL_FULFILLED':
      console.log('create poll')
      const newPollState = {};
      newPollState['polls'] = state.polls.concat[action.payload];
      return {...state, newPollState}


    default:
      return state;
  }
}
