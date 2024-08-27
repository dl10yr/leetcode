/*
 * @lc app=leetcode id=213 lang=typescript
 *
 * [213] House Robber II
 */

// @lc code=start
function helper(nums: number[]): number {
  let rob1 = 0
  let rob2 = 0

  for (const n of nums) {
    let tmp = Math.max(rob1 + n, rob2)
    rob1 = rob2
    rob2 = tmp
  }

  return rob2
}


function rob(nums: number[]): number {
  return Math.max(
    nums[0],
    helper(nums.slice(0, nums.length - 1)),
    helper(nums.slice(1)),
  )
};
// @lc code=end

