/*
 * @lc app=leetcode id=387 lang=typescript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
function firstUniqChar(s: string): number {
  const list = s.split('')
  const duplicates = list.filter((x, i, self) => self.indexOf(x) !== self.lastIndexOf(x) )
  const filtered = list.filter(l => !duplicates.includes(l)) 
  if (filtered.length <= 0) return -1
  return s.indexOf(filtered[0])
};
// @lc code=end

