/*
 * @lc app=leetcode id=997 lang=typescript
 *
 * [997] Find the Town Judge
 */

// @lc code=start
function findJudge(n: number, trust: number[][]): number {
  const trustedMap = new Map<number, number>()
  const trustMap = new Map<number, number>()

  const candidates: number[] = []

  if (n === 1 && trust.length === 0) {
    return 1
  }

  for (const tr of trust) {
    const [trusting, trusted] = tr
    const old = trustedMap.get(trusted) ?? 0
    if (old + 1 === n - 1) {
      candidates.push(trusted)
    } 
    trustedMap.set(trusted, old + 1)
    trustMap.set(trusting, (trustMap.get(trusting) ?? 0) + 1)
  }

  for (const candidate of candidates) {
    if (trustMap.get(candidate) === undefined) {
      return candidate
    }
  }

  return -1
};
// @lc code=end

