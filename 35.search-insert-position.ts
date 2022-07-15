/*
 * @lc app=leetcode id=35 lang=typescript
 *
 * [35] Search Insert Position
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  let index = nums.indexOf(target)
  if (index === -1) {
    index = 0
    for (const num of nums) {
      if (num > target) break
      index++
    }
  }
  return index
};
// @lc code=end

