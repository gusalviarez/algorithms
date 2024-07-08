/* 
 Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 Example 1:

Input: nums = [1,2,3,1]
Output: true
 */

nums = [1, 2, 3, 1];

const containsDuplicate = (nums) => {
  // use a Set to get the nums values without duplicate values
  comparisonSet = [new Set(nums)];
  // if the lengths are different, it means there are duplicate
  return comparisonSet.length !== nums.length;
};

function containsDuplicate2(nums) {
  // Create an empty set to store seen numbers
  const seen = new Set();

  // Loop through the array
  for (const num of nums) {
    // Check if the number is already in the set
    if (seen.has(num)) {
      return true; // duplicate detected, return true
    }
    // Add the number to the set
    seen.add(num);
  }

  // No duplicate found, return false
  return false;
}

console.log(containsDuplicate(nums));
console.log(containsDuplicate2(nums));
