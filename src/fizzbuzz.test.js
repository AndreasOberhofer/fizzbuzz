const { describe, it, expect } = require('@jest/globals')

describe('data', () => {
    it('should return an array with 1 to n elements', () => {
        expect(fizzbuzz(5)).toBe([1, 2, 3, 4, 5]);
    })
})


