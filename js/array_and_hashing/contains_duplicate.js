/* 
 Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 Example 1:

Input: nums = [1,2,3,1]
Output: true
 */

nums = [1,2,3,1]

const containsDuplicate = (nums) => {
    // use a Set to get the nums values without duplicate values
    comparisonSet = [new Set(nums)] 
    // if the lengths are different, it means there are duplicate
    return comparisonSet.length !== nums.length
} 

console.log(containsDuplicate(nums))
