import fetch from 'isomorphic-fetch';
import Auth from '../helpers/Auth'

export const createUser = user => {
  return dispatch => {
    return fetch('http://localhost:3001/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user: user})
    })
    .then(res => res.json())
    .then(res => {
      Auth.authenticateToken(res.token)
    }).catch(error => {
      console.log(error)
    })
  }
}
