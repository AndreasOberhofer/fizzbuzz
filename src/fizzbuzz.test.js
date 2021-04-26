const { describe, it, expect } = require('@jest/globals')
const fizzbuzz = require('./fizzbuzz')

describe('data', () => {
    it('should return an array with 1 to n elements', () => {
        expect(fizzbuzz(5)).toStrictEqual([ 1, 2, 3, 4, 5 ]);
    })
})


