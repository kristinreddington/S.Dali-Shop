import fetch from 'isomorphic-fetch';


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
      console.log(res)
    }).catch(error => {
      console.log(error)
    })
  }
}
