const axios = require('axios');

function getProctorJWTToken({ username, nickname, template, id, subject, tags }) {
  return axios.post(`https://demo.proctoring.online/api/token`, {
    username, nickname, template, id, subject, tags, exp: 60000,
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log('error');
    })
}

module.exports = getProctorJWTToken;