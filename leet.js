/*
Given two strings s and t, determine if they are isomorphic.
Two strings s and t are isomorphic if the characters in s can be replaced to get t.
All occurrences of a character must be replaced with another character while preserving the order
of characters. No two characters may map to the same character, but a character may map to itself.
*/

export function isIsomorphic(s, t) {
    let st = {};
    let ts = {};
    // First if not same length return false
    if (s.length !== t.length) {
        return false;
    }
    // Need two dictionaries for bi-directional checking
    for (var i = 0; i < s.length; i++) {
        if (!st[s[i]]) {
            st[s[i]] = t[i];
        }
        if (!ts[t[i]]) {
            ts[t[i]] = s[i];
        }
        if (st[s[i]] !== t[i] || ts[t[i]] !== s[i]) {
            return false;
        }
    }
    return true;
};

/*
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
Return the running sum of nums.
*/

export function runningSum(nums) {
    nums.forEach((num, index) => {
        if (index > 0) nums[index] = nums[index - 1] + num;
    });
    return nums;
};

/*
Given an array of integers nums, calculate the pivot index of this array.
The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.
Return the leftmost pivot index. If no such index exists, return -1.
*/

export function pivotIndex(nums) {
    let left, right;
    let pivot = -1;
    for (var i = 0; i < nums.length; i++) {
        if (i == 0) {
            left = 0;
        } else {
            left = reducer(nums.slice(0, i));
        }
        if (i == nums.length - 1) {
            right = 0;
        } else {
            right = reducer(nums.slice(i + 1));
        }

        if (left === right) {
            pivot = i;
            break;
        }
    };
    return pivot;
};

var reducer = function (arr) {
    return arr.reduce((previous, next) => previous + next, 0);
}