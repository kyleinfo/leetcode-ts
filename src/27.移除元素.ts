/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] 移除元素
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
  let pos: number;
  for (let i = 0, len = nums.length; i < len; i++) {
    const cur = nums[i];
    if (pos != null && cur !== val) nums[pos++] = cur;
    if (pos == null && cur === val) pos = i;
  }
  if (pos != null) {
    for (let i = 0, len = nums.length - pos; i < len; i++) {
      nums.pop();
    }
  }
  return nums.length;
}
// @lc code=end
