/*
 * @lc app=leetcode id=371 lang=typescript
 *
 * [371] Sum of Two Integers
 */

// @lc code=start
function getSum(a: number, b: number): number {
  let res = a
  let secondInt = b

  while(secondInt !== 0) {
      let temp = (res & secondInt) << 1
      res ^= secondInt
      secondInt = temp
  }

  return res
};
// @lc code=end

