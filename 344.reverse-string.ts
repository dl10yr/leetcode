/*
 * @lc app=leetcode id=344 lang=typescript
 *
 * [344] Reverse String
 */

// @lc code=start
/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  const len = s.length
  for (let i =0; i < Math.ceil(len / 2); i++) {
    const char = s[i]
    s[i] = s[len-1-i]
    s[len-1-i] = char
  }
};
// @lc code=end

