/*
 * @lc app=leetcode id=69 lang=typescript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
function mySqrt(x: number): number {
  let l = 1
  let r = x
  let m
  while (l < r) {
    m = Math.floor((l + r) / 2)
    if (m ** 2 === x) {
      return m
    } else if ( m ** 2 < x) {
      l = m + 1
    } else {
      r = m
    }
  }
  if (r ** 2 > m) return r - 1
  return r
};
// @lc code=end

