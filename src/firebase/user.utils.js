import axios from 'axios';

export const makePostCall = (path,payload) => {
  const URL = 'http://iis.srivensolutions.com:8088'+path;
  console.log(URL)
  return axios(URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json', // whatever you want
    },
    data: payload,
  })
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};