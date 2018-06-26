const parseCm7 = require('./parseCm7');

module.exports = (src) => {
  src = src.replace(/\/\/[^\r\n]*/u, '');
  return parseCm7(src);
};
