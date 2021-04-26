const { describe, it, expect } = require('@jest/globals');
const fizzbuzz = require('./fizzbuzz');
const createData = require('./fizzbuzz')

describe('data', () => {
    it('should return an array with 1 to n elements', () => {
        expect(createData(5)).toStrictEqual([ 1, 2, 3, 4, 5 ]);
    })
})

describe('functionality', () => {
    it('should change the data, replace the number with fizz when its a multiple of 3', () => {
        expect(fizzbuzz(3)).toBe('fizz')
    })
})
