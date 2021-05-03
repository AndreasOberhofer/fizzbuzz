const { describe, it, expect } = require('@jest/globals');
const fizzbuzz = require('./fizzbuzz');
const createData = require('./createdata')

describe('data', () => {
    it('should return an array with a spesific number of elements', () => {
        expect(createData(100)).toHaveLength(100);
    })

    it('should return an array with 1 to n elements', () => {
        expect(createData(7)).toEqual([ 1, 2, 3, 4, 5, 6, 7 ]);
    })
})

describe('functionality', () => {
    it('should change the data, replace the number with fizz when its a multiple of 3', () => {
        expect(fizzbuzz(3)[2]).toEqual("fizz")
    })
})

describe('functionality', () => {
    it('should change the data, replace the number with fizz when its a multiple of 3', () => {
        expect(fizzbuzz(33)[32]).toEqual("fizz")
    })
})

describe('functionality', () => {
    it('should change the data, replace the number with buzz when its a multiple of 5', () => {
        expect(fizzbuzz(7)[4]).toEqual("buzz")
    })
})

describe('functionality', () => {
    it('should change the data, replace the number with fizzbuzz when its a multiple of 3 and 5', () => {
        expect(fizzbuzz(20)[14]).toEqual("fizzbuzz")
    })
})

describe('functionality', () => {
    it('should change the data, replace the number with fizzbuzz when its a multiple of 3 and 5', () => {
        expect(fizzbuzz(30)[29]).toEqual("fizzbuzz")
    })
})