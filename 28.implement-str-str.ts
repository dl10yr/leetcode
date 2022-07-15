/*
 * @lc app=leetcode id=28 lang=typescript
 *
 * [28] Implement strStr()
 */

// @lc code=start
function strStr(haystack: string, needle: string): number {
  if (needle === '') return 0
  return haystack.indexOf(needle)
};
// @lc code=end

