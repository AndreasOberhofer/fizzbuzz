const _ = require('lodash')

const fizzbuzz = ( n => {
    const arr = createData(n)
    const beu = _.cloneDeep(arr)
    leu = beu.map( x => { return x % 3 == 0 ? 'fizz' : x })
    return leu 
})

const createData = ( n => {
    return [...Array(n)].map((_, index) => index + 1)
})

module.exports = createData
module.exports.default = fizzbuzz

