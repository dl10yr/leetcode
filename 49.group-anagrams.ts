/*
 * @lc app=leetcode id=49 lang=typescript
 *
 * [49] Group Anagrams
 */

// @lc code=start
function groupAnagrams(strs: string[]): string[][] {
   const wordMap = strs.reduce((map, str) => {
    const sorted = [...str].sort().join('')
    map[sorted] = [...(map[sorted] || []), str]
    return map
   }, {} ) 

   return Object.values(wordMap)
};
// @lc code=end

