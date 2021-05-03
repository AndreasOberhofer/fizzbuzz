const createData = require("./createdata");

const fizzbuzz = (n) => {
  return createData(n).map((x) => {
    return x % 3 == 0 ? "fizz" : x;
  });
};

module.exports = fizzbuzz;
