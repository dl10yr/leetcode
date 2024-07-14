/*
 * @lc app=leetcode id=150 lang=typescript
 *
 * [150] Evaluate Reverse Polish Notation
 */

// @lc code=start
function evalRPN(tokens: string[]): number {
    const queue: string[] = []
    for (const token of tokens) {
      if (token === '+' || token === '-' || token === '*' || token === '/') {
        const b = Number(queue.pop())
        const a = Number(queue.pop())

        if (token === '+') {
          queue.push(String(a + b))
        } else if (token === '-') {
          queue.push(String(a - b))
        } else if (token === '*') {
          queue.push(String(a * b))
        } else if (token === '/') {
          const ans = a / b
          const fixed = ans > 0 ? Math.floor(ans) : Math.ceil(ans)
          queue.push(String(fixed))
        }
      } else {
        queue.push(token)
      }
    }
    return Number(queue[0])
};
// @lc code=end

