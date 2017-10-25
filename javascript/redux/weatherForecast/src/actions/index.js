import axios from 'axios';

import { OWM_API_URL } from '../config';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${OWM_API_URL}&q=${city},bg`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}

