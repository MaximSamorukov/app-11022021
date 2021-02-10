const users = require('./users');

function getUser({ name, surname }) {
  const user = users.filter((i) => {
    return i.name === name && i.surname === surname;
  });
  return user;
}

module.exports = getUser;