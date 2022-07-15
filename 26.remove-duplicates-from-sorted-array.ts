/*
 * @lc app=leetcode id=26 lang=typescript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  const len = nums.length
  for (let i = 0; i < len - 1; i++) {
    if (i > nums.length -1) {
      break
    }
    if (nums[i] === nums[i+1]) {
      nums.splice(i, 1)
      i--
    }
  }
  return nums.length
};
// @lc code=end

