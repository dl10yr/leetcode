/*
 * @lc app=leetcode id=35 lang=typescript
 *
 * [35] Search Insert Position
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  let l = 0
  let r = nums.length
  let m
  while (l < r) {
    m = Math.floor((l + r) / 2)
    if (nums[m] === target) return m
    if (nums[m] < target) {
      l = m + 1
    } else {
      r = m
    }
  }
  return l
};
// @lc code=end

