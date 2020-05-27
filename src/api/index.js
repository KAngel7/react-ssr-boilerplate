import { httpClient } from './httpClient';
import { weatherApi } from './weatherApi';

export function apiFactory(http) {
  return {
    weather: weatherApi(http)
  };
}

const http = httpClient('http://localhost:3000');
export const api = apiFactory(http);
