/*
 * @lc app=leetcode id=268 lang=typescript
 *
 * [268] Missing Number
 */

// @lc code=start
function missingNumber(nums: number[]): number {
  nums.sort((a, b) => a - b)
  let cnt = 0
  for (const n of nums) {
    if (cnt !== n) return cnt
    cnt++
  }
  return nums.length
};
// @lc code=end

