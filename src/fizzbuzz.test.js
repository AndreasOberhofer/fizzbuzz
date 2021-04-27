const { describe, it, expect } = require('@jest/globals');
const fizzbuzz = require('./fizzbuzz');
const createData = require('./fizzbuzz')

describe('data', () => {
    it('should return an array with a spesific number of elements', () => {
        expect(createData(7).length).toBe(7);
    })

    it('should return an array with 1 to n elements', () => {
        expect(createData(6)).toStrictEqual([ 1, 2, 3, 4, 5, 6 ]);
    })
})

describe('functionality', () => {
    it('should change the data, replace the number with fizz when its a multiple of 3', () => {
        expect(fizzbuzz(3)[2]).toBe("fizz")
    })
})
