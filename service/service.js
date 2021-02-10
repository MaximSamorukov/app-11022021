function getInfo(page = '') {
  return axios.get(`http://localhost:5000/${page}`).then((response) => {
    return response;
  })
}

function getToTest(token = '', page = 'first') {
  return axios.post(`http://localhost:5000/${page}`, {
    token,
  }).then((response) => {
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

function login({ name, password }, page = '') {
  // console.log(name, password);
  return axios.post(`http://localhost:5000/${page}`, {
    name,
    password
  })
    .then((response, reject) => {
      const { status, data: token } = response
      const st = window.localStorage;
      st.setItem('token', token);
      if (status === 200) {
        return { status, token };
      };
    })
    .catch(function (error) {
      console.log(error.toJSON());
    })
}
