const initialUserState = {user: {username: '', token: '', authenticated: false}}

export default function userReducer(state = {}, action) {
  console.log(state)
  switch(action.type) {

    case 'REGISTER_USER_FULFILLED':
      console.log('registered user', action)
      return {...state , ...action.payload}

    case 'LOGIN_USER_FULFILLED':
      console.log('user logged in', action);
      return {...state ,  ...action.payload.user}

    case 'VERIFY_USER_TOKEN_FULFILLED':
      console.log('user logged in', action);
      return {...state ,  ...action.payload.user}

    case 'VERIFY_USER_TOKEN_REJECTED':
      console.log('verify user rejected');
      return {...state}

    case 'LOGOUT_USER':

      return {...state.user, ...action.payload.user}

    default:
      return state;
  }
}
