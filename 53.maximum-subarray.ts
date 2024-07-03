/*
 * @lc app=leetcode id=53 lang=typescript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
  let maxSub = nums[0]
  let curSum = 0

  for (const n of nums) {
      if (curSum < 0) {
          curSum = 0
      }
      curSum += n
      maxSub = Math.max(maxSub, curSum)
  }

  return maxSub
};
// @lc code=end

