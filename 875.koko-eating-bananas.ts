/*
 * @lc app=leetcode id=875 lang=typescript
 *
 * [875] Koko Eating Bananas
 */

// @lc code=start
function canEatAll(piles: number[], h: number, speed: number): number {
  let remaining = h
  for (let i = 0; i < piles.length; i++) {
    remaining -= Math.ceil(piles[i] / speed)
    if (remaining < 0) {
      break
    }
  }
  return remaining
}

function minEatingSpeed(piles: number[], h: number): number {
    piles.sort((a, b) => a - b)
    let low = 0
    let high = piles[piles.length - 1]

    while (low < high) {
      const mid = low + Math.floor((high - low) / 2)
      const remainingHours = canEatAll(piles, h, mid)
      if (remainingHours >= 0) {
        high = mid
      } else {
        low = mid + 1
      }
    }

    return high
};
// @lc code=end

