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
  f('first').then(({ data }) => {
    container.innerHTML = data;
    const btn = document.querySelector('.btn-class');
    btn.addEventListener('click', (e) => {
      const cn = (e.target.className);
      console.log(cn);
      const page = cn.includes('second') ? 'first' : 'second';
      f(page).then(({ data }) => {
        container.innerHTML = data;
      });
    });
    // const toSecondPage = document.querySelector('.first-page');
    // const toFirstPage = document.querySelector('.second-page');
  });



}

