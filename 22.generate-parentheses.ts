/*
 * @lc app=leetcode id=22 lang=typescript
 *
 * [22] Generate Parentheses
 */

// @lc code=start

function generateParenthesis(n: number): string[] {
  const ans: string[] = []

  const generator = (s: string, left: number, right: number) => {
    if (right === 0) {
      ans.push(s)
      return
    }

    if (left > 0) generator(s + '(', left - 1, right)

    if (right > left) generator(s + ')', left, right - 1)
  }

  generator('', n, n)
  return ans
};
// @lc code=end

