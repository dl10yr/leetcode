/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
interface InitialValue {
  prev: string,
  count: number,
}

const initialValue = {
  prev: '',
  count: 0,
};

const getLongestSubstring = (
  { prev, count }: InitialValue,
  currentLetter: string,
) => {
  const repeatedIndex = prev.indexOf(currentLetter);
  const currentLetters = repeatedIndex > -1
    ? prev.substring(repeatedIndex + 1) + currentLetter
    : prev + currentLetter;
  return {
    prev: currentLetters,
    count: currentLetters.length > count
      ? currentLetters.length
      : count,
  }
};

function lengthOfLongestSubstring(s: string): number {
  const result = s.split('').reduce(getLongestSubstring, initialValue)
  return result.count;
};
// @lc code=end

