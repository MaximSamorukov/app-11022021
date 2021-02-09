
function getInfo(page) {
  return axios.get(`http://localhost:5000/${page}`).then((response) => {
    return response;
  })
}

function getDestination(classname) {
  const obj = {
    'first-page': 'second',
    'second-page': 'third',
  };
  return obj[classname];
}