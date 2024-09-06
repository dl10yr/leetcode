/*
 * @lc app=leetcode id=647 lang=typescript
 *
 * [647] Palindromic Substrings
 */

// @lc code=start
function countSubstrings(s: string): number {
  let res = 0

  for (let i = 0; i < s.length; i++) {
    let l = i
    let r = i

    while(l >= 0 && r < s.length && s[l] === s[r]) {
      res += 1
      l--
      r++
    }

    l = i
    r = i + 1

    while(l >= 0 && r < s.length && s[l] === s[r]) {
      res += 1
      l--
      r++
    }
  }

  return res
};
// @lc code=end

