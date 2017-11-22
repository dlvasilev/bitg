import axios from 'axios';

const SERVER_URL = 'http://localhost:3000';

export function signinUser({ email, password }) {
  return (dispatch) => {
    axios.post(`${SERVER_URL}/signin`, { email, password });
  }
}
