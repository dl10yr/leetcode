/*
 * @lc app=leetcode id=118 lang=typescript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
function generate(numRows: number): number[][] {
  const dp: number[][] = [...Array(numRows)].map((_, i) => Array(i+1))

  for (let i = 0; i < dp.length; i++) {
    dp[i][0] = 1
    dp[i][dp[i].length - 1] = 1
  }

  for (let i = 2; i < dp.length; i++) {
    for (let j = 1; j < dp[i].length - 1; j++) {
      dp[i][j] = dp[i-1][j-1] + dp[i-1][j]
    }
  }

  return dp
};
// @lc code=end

