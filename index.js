// const url = 'http://localhost';
const url = 'https://salty-lowlands-75174.herokuapp.com/';
const page = '';
const port = '80';
const container = document.querySelector('#id');

window.onload = function () {
  getInfo(page, url, port).then(({ data }) => {
    container.innerHTML = data;
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
      const name = e.target.elements[0].value;
      const password = e.target.elements[1].value;
      login({ name, password }, url, port).then(({ status, token }) => {
        if (status === 200) {
          getToTest(token, url, port).then(({ data }) => {
            container.innerHTML = data;
          })
        }
      })
      e.preventDefault();
    })
  });
  container.addEventListener('click', (e) => {
    const classes = ['btn-class first-page', 'btn-class second-page'];
    if (!classes.includes(e.target.className)) {
      return;
    }
    const pageName = e.target.className.split(' ')[1];
    const page = getDestination(pageName);
    const st = window.localStorage;
    const token = st.getItem('token');
    getToTest(token, url, port, page).then(({ data }) => {
      container.innerHTML = data;
      if (page === 'second') {
        const supervisor = new Supervisor({ url: 'https://demo.proctoring.online' });
        supervisor.init({
          provider: 'jwt',
          token,
        }).then(function () {
          return supervisor.start();
        }).catch(function (err) {
          alert(err.toString());
          location.href = '/';
        });
      }
    });

  })

}

