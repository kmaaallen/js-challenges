import { runningSum, pivotIndex, isIsomorphic } from './leet';

describe("isIsomorphic", function () {
    it("returns true for 'egg', 'add' ", () => {
        expect((isIsomorphic("egg", "add"))).toEqual(true);
    });
    it("returns false for 'foo', 'bar' ", () => {
        expect((isIsomorphic("foo", "bar"))).toEqual(false);
    });
    it("returns true for 'paper', 'title' ", () => {
        expect((isIsomorphic("paper", "title"))).toEqual(true);
    });
    it("returns false for 'baba', 'badc' ", () => {
        expect((isIsomorphic("baba", "badc"))).toEqual(false);
    });
})

describe("runningSum", function () {
    it("returns [1,3,6,10] for [1,2,3,4]", () => {
        expect(runningSum([1, 2, 3, 4])).toEqual([1, 3, 6, 10]);
    });
    it("returns [1,2,3,4,5] for [1,1,1,1,1]", () => {
        expect(runningSum([1, 1, 1, 1, 1])).toEqual([1, 2, 3, 4, 5]);
    });
    it("returns [3,4,6,16,17] for [3,1,2,10,1]", () => {
        expect(runningSum([3, 1, 2, 10, 1])).toEqual([3, 4, 6, 16, 17]);
    });
});

describe("pivotIndex", function () {
    it("returns 3 for [1,7,3,6,5,6]", () => {
        expect(pivotIndex([1, 7, 3, 6, 5, 6])).toEqual(3);
    });
    it("returns -1 for [1,2,3]", () => {
        expect(pivotIndex([1, 2, 3])).toEqual(-1);
    });
    it("returns 0 for [2,1,-1]", () => {
        expect(pivotIndex([2, 1, -1])).toEqual(0);
    });
    it("returns 0 for [0,-2,1,-1,-1]", () => {
        expect(pivotIndex([0, -2, 1, -1, -1])).toEqual(2);
    });
});