const REGISTER_USER = 'REGISTER_USER';
const LOGIN_USER = 'LOGIN_USER'

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
        console.log('response', response)
        return response.json()
      })
  }
}
