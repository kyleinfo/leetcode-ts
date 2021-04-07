/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  if (nums.length <= 1) return nums.length;

  let index = 0;
  let latest = nums[0];
  const len = nums.length;
  for (let i = 1; i < len; i++) {
    const cur = nums[i];
    if (cur !== latest) {
      index++;
      latest = cur;
      if (index < i) {
        nums[index] = cur;
      }
    }
  }
  const remain = len - index - 1;
  for (let i = 0; i < remain; i++) {
    nums.pop();
  }
  return index + 1;
}
// @lc code=end
