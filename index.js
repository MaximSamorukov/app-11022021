const container = document.querySelector('#id');
// const viewContainer = document.createElement('div');
// const pressBtn = document.createElement('div');
// viewContainer.className = 'view-class';
// pressBtn.className = 'btn-class';
// pressBtn.textContent = 'Press';
// container.appendChild(viewContainer);
// container.appendChild(pressBtn);

// pressBtn.addEventListener('mousedown', (e) => {
//   f('second').then(({ data }) => {
//     document.querySelector('.view-class').innerHTML = data;
//   })
// });

// pressBtn.addEventListener('mouseup', (e) => {
//   viewContainer.textContent = '';
// });

window.onload = function () {
  getInfo('first').then(({ data }) => {
    container.innerHTML = data;
  });

  container.addEventListener('click', (e) => {
    const classes = ['btn-class first-page', 'btn-class second-page'];
    if (!classes.includes(e.target.className)) {
      return;
    }
    const pageName = e.target.className.split(' ')[1];
    const page = getDestination(pageName);
    getInfo(page).then(({ data }) => {
      container.innerHTML = data;
    });

  })

}

