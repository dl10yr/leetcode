/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
function isPalindrome(s: string): boolean {
  const strings = s.match(/[0-9a-zA-Z]/g)?.map(s => s.toLowerCase()) || []
  if (strings.length === 0) return true
  for (let i = 0; i < Math.ceil(strings.length/2) ; i++) {
    if (strings[i] !== strings[strings.length - 1 - i]) return false
  }
  return true
};
// @lc code=end

