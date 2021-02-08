
const f = function getInfo(page) {
  return axios.get(`http://localhost:5000/${page}`).then((response) => {
    return response;
  })
}

