const fizzbuzz = ( n => {
    return createData(n) 
})

const createData = ( n => {
    return [...Array(n)].map((_, index) => index + 1)
})

module.exports = fizzbuzz
module.exports = createData


