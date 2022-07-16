import { fizzBuzz } from './fizzbuzz.js';

describe("Solution", function () {
    it("returns Fizz for multiples of three only", () => {
        expect(fizzBuzz(2, 3)).toEqual("2,Fizz");
    });
    it("returns Buzz for multiples of five only", () => {
        expect(fizzBuzz(1, 5)).toEqual("1,2,Fizz,4,Buzz");
    });
    it("returns FizzBuzz for multiples of three and five", () => {
        expect(fizzBuzz(10, 15)).toEqual("Buzz,11,Fizz,13,14,FizzBuzz");
    });
});