import axios from '../axiosconfig';

export function loadPhotoShoots() {
  // Get all of the upcoming photo shoots
  return axios
    .get('/sessions')
    .then(response => {
      return response.data;
    })
    .catch(error => console.log(error));
}

export function loadSessionSignUp(sessionId) {
  return axios
    .get(`/sessions/${sessionId}`)
    .then(response => response.data)
    .catch(error => console.log(error));
}

export function signUpForSession(sessionId, attendeeInfo) {
  return axios
    .post(`/sessions/${sessionId}`, attendeeInfo)
    .then(response => response.data)
    .catch(error => console.log(error));
}
