/*
 * @lc app=leetcode id=167 lang=typescript
 *
 * [167] Two Sum II - Input Array Is Sorted
 */

// @lc code=start
function twoSum(numbers: number[], target: number): number[] {
    let l = 0
    let r = numbers.length - 1

    let isFind = false

    while(!isFind) {
      const sum = numbers[l] + numbers[r]

      if (sum > target) {
        r -= 1
      } else if (sum < target) {
        l += 1
      } else {
        isFind = true
      }
    }

    return [l + 1, r + 1]
};
// @lc code=end

