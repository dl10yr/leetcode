/*
 * @lc app=leetcode id=152 lang=typescript
 *
 * [152] Maximum Product Subarray
 */

// @lc code=start
function maxProduct(nums: number[]): number {
  let res = Math.max(...nums)
  let curMax = 1
  let curMin = 1 // マイナスがある

  for (const n of nums) {
      if (n === 0) {
          curMin = 1
          curMax = 1
          continue
      }

      let temp = curMax * n
      curMax = Math.max(curMax * n, n * curMin, n)
      curMin = Math.min(temp, n * curMin, n)
      res = Math.max(res, curMax)
  }

  return res
};
// @lc code=end

