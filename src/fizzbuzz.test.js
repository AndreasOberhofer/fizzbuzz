const { describe, it, expect } = require('@jest/globals');
const fizzbuzz = require('./fizzbuzz');
const createData = require('./createdata')

const data = createData(7)

describe('data', () => {
    it('should return an array with a spesific number of elements', () => {
        expect(data).toHaveLength(7);
    })

    it('should return an array with 1 to n elements', () => {
        expect(data).toEqual([ 1, 2, 3, 4, 5, 6, 7 ]);
    })
})

describe('functionality', () => {
    it('should change the data, replace the number with fizz when its a multiple of 3', () => {
        expect(fizzbuzz(7)[2]).toEqual("fizz")
    })
})
