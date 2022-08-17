/*
 * @lc app=leetcode id=8 lang=typescript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
function myAtoi(s: string): number {
  const trimmed = s.trim()

  if (trimmed === '') return 0

  const parsed = parseInt(trimmed, 10)
  if (Number.isNaN(parsed)) return 0
  const min = Math.pow(-2, 31)
  const max = Math.pow(2, 31) -1

  if (parsed < min) return min
  if (parsed > max) return max
  return parsed
};
// @lc code=end

