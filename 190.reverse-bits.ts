/*
 * @lc app=leetcode id=190 lang=typescript
 *
 * [190] Reverse Bits
 */

// @lc code=start
function reverseBits(n: number): number {
  let result: number = 0
  let p: number = 31
  while(n) {
    result += (n & 1) << p
    n = n >>> 1
    p -= 1
  }
  return result >>> 0
};
// @lc code=end

