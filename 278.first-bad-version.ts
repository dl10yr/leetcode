/*
 * @lc app=leetcode id=278 lang=typescript
 *
 * [278] First Bad Version
 */

// @lc code=start
/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {

    return function(n: number): number {

        let l = 1
        let r = n

        while (l < r) {
            const m = Math.floor((l + r) / 2)
            if (isBadVersion(m)) {
                r = m
            } else {
                l = m + 1
            }
        }
        return l
    };
};
// @lc code=end

