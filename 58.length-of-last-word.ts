/*
 * @lc app=leetcode id=58 lang=typescript
 *
 * [58] Length of Last Word
 */

// @lc code=start
function lengthOfLastWord(s: string): number {
  const list = s.split(' ')
  const filtered = list.map(l => l.replace(' ', '')).filter(l => l !== '')
  return filtered[filtered.length-1].length
};
// @lc code=end

