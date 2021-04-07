/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const caches = Object.create(null);
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    const item = nums[i];
    const index = caches[item];
    if (index != null) {
      return [index, i];
    }
    caches[target - item] = i;
  }
}
// @lc code=end
