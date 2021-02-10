const container = document.querySelector('#id');

window.onload = function () {
  getInfo().then(({ data }) => {
    container.innerHTML = data;
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
      const name = e.target.elements[0].value;
      const password = e.target.elements[1].value;
      login({ name, password }).then(({ status, token }) => {
        if (status === 200) {
          getToTest(token).then(({ data }) => {
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
    getToTest(token, page).then(({ data }) => {
      container.innerHTML = data;
    });

  })

}

