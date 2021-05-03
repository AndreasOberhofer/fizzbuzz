const createData = require("./createdata");

const fizzbuzz = (n) => {
  return createData(n).map((x) => {
    if(x % 3 === 0) return 'fizz'
    if(x % 5 === 0) return 'buzz'
    if(x) return x
  });
};

module.exports = fizzbuzz;
