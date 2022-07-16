/*
 * @lc app=leetcode id=70 lang=typescript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
function climbStairs(n: number): number {
  let dp: number[] = []
  dp.push(1)
  dp.push(2)
  for (let i = 3; i <= n; i++) {
    dp.push(dp[i-2] + dp[i-3])
  }
  return dp[n-1]
};
// @lc code=end

