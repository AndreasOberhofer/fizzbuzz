const createData = ( n => {
    return [...Array(n)].map((_, index) => index + 1)
})

module.exports = createData