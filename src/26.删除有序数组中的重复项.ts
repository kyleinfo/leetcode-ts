/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  if (nums.length <= 1) return nums.length;
  let pos = 0;
  for (let i = 1, len = nums.length; i < len; i++) {
    const cur = nums[i];
    if (cur !== nums[pos]) {
      nums[++pos] = cur;
    }
  }
  for (let i = 0, len = nums.length - pos - 1; i < len; i++) {
    nums.pop();
  }
  return pos + 1;
}
// @lc code=end
