/*
 * @lc app=leetcode id=628 lang=typescript
 *
 * [628] Maximum Product of Three Numbers
 */

// @lc code=start
function maximumProduct(nums: number[]): number {
  nums.sort((a, b) => b - a);

  let largestProd = nums[0] * nums[1] * nums [2];
  let smallestProd = nums[0] * nums[nums.length - 1] * nums[nums.length - 2];

  return Math.max(largestProd, smallestProd)
};
// @lc code=end

