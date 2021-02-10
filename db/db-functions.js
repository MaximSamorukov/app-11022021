const users = require('./users');
const bcrypt = require('bcrypt');

function getUser({ name, password }) {
  const user = users.filter((i) => {
    const passwordValidation = bcrypt.compareSync(password, i.password);
    return i.name === name && passwordValidation;
  });
  return user;
}

module.exports = getUser;