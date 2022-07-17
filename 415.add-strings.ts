/*
 * @lc app=leetcode id=415 lang=typescript
 *
 * [415] Add Strings
 */

// @lc code=start
function addStrings(num1: string, num2: string): string {
  let isCarry = false
  let len1 = num1.length
  let len2 = num2.length
  let max = Math.max(len1, len2)
  let result = ''
  for (let i = 0; i < max; i++) {
    let int1 = parseInt(num1[len1 - 1 -i]) || 0
    let int2 = parseInt(num2[len2 - 1 -i]) || 0
    let added = isCarry ? 1 : 0
    if (int1 + int2 + added >= 10) {
      isCarry = true
      result = String(int1+int2 + added)[1] + result
    } else {
      isCarry = false
      result = String(int1+int2 + added)[0] + result
    }
  }
  if (isCarry) result = '1' + result
  return result
};
// @lc code=end

