const REGISTER_USER = 'REGISTER_USER';
const LOGIN_USER = 'LOGIN_USER';
const VERIFY_USER_TOKEN = 'VERIFY_USER_TOKEN'

export function registerUser(data) {
      console.log('registerUser', data)
  return {
    type: REGISTER_USER,
    payload: fetch('/api/users/register',
      {method: 'POST', headers: {"Content-Type": "application/json" },
      body: JSON.stringify(data)})
      .then(response => response.json())
  }
}

export function loginUser(data) {
      console.log('loginUser', data)
  return {
    type: LOGIN_USER,
    payload: fetch('/api/users/login',
    {method: 'POST', headers: {"Content-Type": "application/json" },
    body: JSON.stringify(data)}).then(
      response => {
        return response.json()
      })
  }
}

export function verifyUserToken(token) {
  console.log('token',token)
  return {
    type: VERIFY_USER_TOKEN,
    payload: fetch('/api/users/verifyToken',
    {method: 'POST', headers: {"Content-Type": "application/json" },
    body:JSON.stringify({token:token})}).then(
      response => {
        console.log('verify user token', response)
        return response.json()
      })

  }
}
