export function registerUser(state = {}, action) {
  console.log('registeruser', action)
  switch(action.type) {
    case 'REGISTER_USER_FULFILLED':
      console.log('registered user', action)
      return [...state ,  {authenticated: true}]
    default:
      return state;
  }
}

export function loginUser(state = {}, action) {
  console.log('loginUser', action)
  switch(action.type) {
    case 'LOGIN_USER_FULFILLED':
      console.log('user logged in', action);
      return [...state ,  ...{user: action.payload, actionauthenticated: true}]
    default:
      return state;
  }
}
