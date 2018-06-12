const initialState = [{
  _id: "5a204db4b90c155c858f4bcd",
  pollName: "newtest",
  user: "marc",
  beers: [
    {
      brewery: "bath ales",
      country: "uk",
      name: "festivity",
      strength: 4.5,
      style: "porter",
      votes: 0
    },
    {
      brewery: "electric bear",
      country: "uk",
      name: "edison",
      strength: 5,
      style: "larger",
      votes: 0
    }
  ]
}];

export default function fetchPolls(state = initialState, action) {
  switch(action.type) {
    case 'FETCH_POLLS_FULFILLED':
      console.log('fetched polls')
      return [...state ,  ...action.payload]

    case 'CREATE_POLL_FULFILLED':
      console.log('create poll')
      const newPollState = {};
      newPollState['polls'] = state.polls.concat[action.payload];
      return {...state, newPollState}


    default:
      return state;
  }
}
