/*
 * @lc app=leetcode id=191 lang=typescript
 *
 * [191] Number of 1 Bits
 */

// @lc code=start
function hammingWeight(n: number): number {
  let result: number = 0
  while(n) {
    result += (n & 1)
    n = n >>> 1
  }
  return result >>> 0
};
// @lc code=end

