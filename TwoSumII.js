// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order,
// find two numbers such that they add up to a specific target number.
// Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
// Return the indices of the two numbers, index1 and index2,
// added by one as an integer array [index1, index2] of length 2.
// The tests are generated such that there is exactly one solution.
// You may not use the same element twice.


//////// Two Pointers ////////
const twoSum = function(numbers, target) {
    const result = [];
    let sum = Infinity;
    let l = 0;
    let r = numbers.length -1;
    
    while (sum !== target) {
        sum = numbers[l] + numbers[r];
        if (sum > target) {
            r--;
        } else if (sum < target) {
            l++;
        } else if (sum === target){
            result.push(l+1, r+1);
        }
    }
    return result;
};

// @param  {number[]} numbers ==> ascending array of integers
// @param  {number} target    ==> target integer
// @return {number[]}         ==> 1-indexed array of indices

// Because the array is sort a two pointer process can be used

// left pointer (l) starting at first index
// right pointer (r) starting at last index
// initialize variable to keep track of the sum
// initialize variable for return value

// while sum doesn't equal target
// reassign sum to element at l + element at r

// if sum is greater than target
// decrement r to next smallest value

// if sum is less than target
// increment l to next larger value

// if sum is equal to target
// push idx l + 1 and r + 1

