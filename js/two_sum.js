/*
Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.

You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

Return the answer with the smaller index first.

Example 1:

nums = [3,4,5,6] 
target = 7

output = [0, 1]
*/

nums = [3,4,5,6]
target = 7

function twoSum(nums, target) {
  let result = [];

  // iterate through the array to get the first element
  for(i = 0; i < nums.length; i++){
    // iterate through the array to get the second element to compare
    for(j = 0; j < nums.length; j++){
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

console.log(twoSum(nums, target))
