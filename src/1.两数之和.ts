/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const caches = new Map<number, number>();
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    const cur = nums[i];
    const index = caches.get(cur);
    if (index != null) {
      return [index, i];
    }
    caches.set(target - cur, i);
  }
}
// @lc code=end
