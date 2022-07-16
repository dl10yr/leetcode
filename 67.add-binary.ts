/*
 * @lc app=leetcode id=67 lang=typescript
 *
 * [67] Add Binary
 */

// @lc code=start
function addBinary(a: string, b: string): string {
  const lena = a.length
  const lenb = b.length
  const max = Math.max(lena, lenb)
  let res = ''
  let carry = 0
  let val = 0

  for (let i = 0; i < max; i++) {
    val = Number(a[lena - 1 -i] || 0) + Number(b[lenb-1-i] || 0) + carry
    carry = Math.floor(val / 2)
    res = (val % 2) + res
  }

  if (carry) res = 1 + res
  return res
};
// @lc code=end

