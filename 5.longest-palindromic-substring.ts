/*
 * @lc app=leetcode id=5 lang=typescript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
function longestPalindrome(s: string): string {
  if (!s || s.length <= 1) return s
  let longest = s.substring(0, 1)

  for (let i = 0; i < s.length; i++) {
    let left = i
    let right = i
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left -= 1
      right += 1
    }
    const oddPalindrome = s.slice(left + 1, right)

    left = i
    right = i + 1
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left -= 1
      right += 1
    }
    const evenPalindrome = s.slice(left + 1, right)

    if (Math.max(oddPalindrome.length, evenPalindrome.length) > longest.length) {
      longest = oddPalindrome.length > evenPalindrome.length ? oddPalindrome : evenPalindrome
    }
  }
  return longest
}

// @lc code=end

