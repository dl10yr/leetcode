/*
 * @lc app=leetcode id=198 lang=typescript
 *
 * [198] House Robber
 */

// @lc code=start
function rob(nums: number[]): number {
  let rob1 = 0
  let rob2 = 0

  for (const n of nums) {
    const tmp = Math.max(n + rob1, rob2)
    rob1 = rob2
    rob2 = tmp
  }
  return rob2
    
};
// @lc code=end

