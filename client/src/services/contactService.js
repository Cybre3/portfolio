import http from './httpService';

const apiEndpoint = '/contact';

export function sendForm(data) {
  return http.post(apiEndpoint, data);
}
