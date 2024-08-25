/*
 * @lc app=leetcode id=290 lang=typescript
 *
 * [290] Word Pattern
 */

// @lc code=start
function wordPattern(pattern: string, s: string): boolean {
  const patterns = pattern.split('')
  const strs = s.split(' ')

  const patternStringMap = new Map<string, string>()

  if (pattern.length !== strs.length) return false

  for (let i = 0; i < patterns.length; i++) {
    const p = patterns[i]
    const str = strs[i]
    const mapValue = patternStringMap.get(p)

    if (mapValue === undefined) {
      if ([...patternStringMap.values()].includes(str)) return false
      patternStringMap.set(p, str)
      continue
    }
    if (mapValue !== str) {
      return false
    }
  }
  return true
};
// @lc code=end

