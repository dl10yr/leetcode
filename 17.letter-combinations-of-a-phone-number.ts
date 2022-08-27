/*
 * @lc app=leetcode id=17 lang=typescript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
function letterCombinations(digits: string): string[] {
  const numToChar = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  }

  return digits.split('').reduce((prev, current, currentIndex) => {
    const chars: string[] = numToChar[parseInt(current)]
    if (!currentIndex) {
      return chars
    }
    return prev.map(v => chars.map(c =>  v + c).flat()).flat()
  }, [] as string[])
};
// @lc code=end

