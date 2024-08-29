/*
 * @lc app=leetcode id=134 lang=typescript
 *
 * [134] Gas Station
 */

// @lc code=start
function canCompleteCircuit(gas: number[], cost: number[]): number {
  let ans = 0
  let netDistance = 0

  const sumGas = gas.reduce((prev, current) => prev + current, 0)
  const sumCost = cost.reduce((prev, current) => prev + current, 0)

  if (sumGas - sumCost < 0) {
    return -1
  }

  for (let i = 0; i < gas.length; i++) {
    netDistance += gas[i] - cost[i]

    if (netDistance < 0) {
      netDistance = 0
      ans = i + 1
    }
  }

  return ans

};
// @lc code=end

