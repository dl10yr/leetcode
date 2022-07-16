/*
 * @lc app=leetcode id=66 lang=typescript
 *
 * [66] Plus One
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
  let integer = Number(digits.join(""));
  if (Number(digits.join("")) < Number.MAX_SAFE_INTEGER) {
    return String(integer + 1).split("").map((s) => Number(s));
  }

  let p = digits.length -1
  let isCarry = false
  while (p >= 0) {
    let d = digits[p] + 1
    if (d === 10) {
      digits[p] = 0
      isCarry = true
    } else {
      digits[p] = d
      isCarry = false
      break
    }
    p -= 1
  }
  if (isCarry) {
    digits.unshift(1)
  }
  return digits

};
// @lc code=end

