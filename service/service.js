function getInfo(page = '', url = 'http://localhost', port = '80') {
  return axios.get(`${url}:${port}/${page}`).then((response) => {
    return response;
  })
}

function getToTest(token = '', url = 'http://localhost', port = '80', page = 'first') {
  return axios.post(`${url}:${port}/${page}`, {
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

function login({ name, password }, url = 'http://localhost', port = '80', page = '') {
  // console.log(name, password);
  return axios.post(`${url}:${port}/${page}`, {
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
