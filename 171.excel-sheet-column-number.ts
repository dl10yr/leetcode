/*
 * @lc app=leetcode id=171 lang=typescript
 *
 * [171] Excel Sheet Column Number
 */

// @lc code=start
function titleToNumber(columnTitle: string): number {
  const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  const len = columnTitle.length - 1
  const nums = columnTitle.split('').map((v, i) => (alphabets.indexOf(v) + 1) * (26 ** (len - i))) 
  return nums.reduce((prev, current) => prev + current, 0)
};
// @lc code=end

