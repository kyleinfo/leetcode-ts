/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子序和
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
  let max = -Infinity;
  let toEnd = 0;
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    const cur = nums[i];
    const sum = toEnd + cur;
    max = Math.max(max, sum);
    toEnd = Math.max(sum, cur, 0);
  }
  return max;
}
// @lc code=end
