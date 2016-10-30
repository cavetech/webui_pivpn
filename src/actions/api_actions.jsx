import axios from 'axios';
import {API_STATUS} from './actions_types';

const API_URL = 'http://localhost:3000/api';

export function apiStatus() {
  return (dispatch => {
    axios.get(`${API_URL}/status`)
      .then(response => {
        console.log("anwser");
        console.log(response.data);
        dispatch({
        type: API_STATUS,
        payload: response.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  })
}
