/*
 * @lc app=leetcode id=412 lang=typescript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
function fizzBuzz(n: number): string[] {
  const result: string[] = []
  for (let i = 1; i <= n; i++) {
    const r = i % 15 === 0 ? 'FizzBuzz'
    : i % 3 === 0 ? 'Fizz'
    : i % 5 === 0 ? 'Buzz'
    : String(i)
    result.push(r)
  }
  return result
};
// @lc code=end

