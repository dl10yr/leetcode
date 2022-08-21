/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start

function lengthOfLongestSubstring(s: string): number {
  const result = s.split('').reduce((prev, current) => {
    const beforeAppearedIndex = prev.subString.indexOf(current)
    const subString = beforeAppearedIndex === -1
    ? prev.subString + current
    : prev.subString.slice(beforeAppearedIndex + 1) + current

    return { maxLength: Math.max(prev.maxLength, subString.length), subString }
  }, { maxLength: 0, subString: '' })
  return result.maxLength
}


// @lc code=end

