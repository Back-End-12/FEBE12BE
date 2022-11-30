const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, 'febe12', {
    expiresIn: "3d"
  });
};

module.exports = generateToken;
