import axios from '../axiosconfig';

export function loadPhotoShoots() {
  // Get all of the upcoming photo shoots
  console.log('MAKING THE REQUEST');
  return axios
    .get('/sessions')
    .then(response => {
      return response.data;
    })
    .catch(error => console.log(error));
}

export function loadSessionSignUp(sessionId) {}
