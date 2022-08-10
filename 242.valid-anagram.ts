/*
 * @lc app=leetcode id=242 lang=typescript
 *
 * [242] Valid Anagram
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  const map = new Map<string, number>()
  for (const char of s) {
    map.set(char, (map.get(char) ?? 0) + 1)
  }

  for (const char of t) {
    const value = map.get(char) ?? 0
    if (value === 0) return false
    map.set(char, value - 1) 
  }
  const values = Array.from(map.values())
  if (values.filter(v => v !== 0).length > 0) return false
  return true
};
// @lc code=end

