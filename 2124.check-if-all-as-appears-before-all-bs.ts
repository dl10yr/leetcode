/*
 * @lc app=leetcode id=2124 lang=typescript
 *
 * [2124] Check if All A's Appears Before All B's
 */

// @lc code=start
function checkString(s: string): boolean {
  let isInitB = false
  for (const char of s) {
    if (isInitB && char === 'a') return false
    if (char === 'b') {
      isInitB = true
    }
  }
  return true
};
// @lc code=end

