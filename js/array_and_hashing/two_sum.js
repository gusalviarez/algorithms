/*
Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.

You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

Return the answer with the smaller index first.

Example 1:

nums = [3,4,5,6] 
target = 7

output = [0, 1]
*/

nums = [3, 4, 5, 6]
target = 7

function twoSumDoubleFor(nums, target) {
  let result = [];

  // iterate through the array to get the first element
  for (i = 0; i < nums.length; i++) {
    // iterate through the array to get the second element to compare
    for (j = 0; j < nums.length; j++) {
      // check if the sum of the two elements is equal to the target
      sum = nums[i] + nums[j]
      // if the sum is equal to the target, push the indices to the result array
      if (sum == target) {
        result.push(i)
        result.push(j)
      }
    }
  }
  // return the result array with unique values
  // another optimal way is use the Set object to get unique values
  // return [...new Set(result)]
  return result.filter((value, index) => result.indexOf(value) == index);
}


// we can also use two pointers technique, this has a much better performance 

function twoSumTwoPointers(nums, target) {
  let sorted = nums.sort((a, b) => a - b)
  let result = []
  let l = 0
  let r = sorted.length - 1
  while (l < r) {
    sum = sorted[l] + sorted[r]
    if (sum == target) {
      result.push(l)
      result.push(r)
      return result
    } else if (sum < target) {
      l = l + 1
    } else if (sum > target) {
      r = r - 1
    }
  }
}



console.log(twoSum(nums, target))
console.log(twoSum2(nums, target))







