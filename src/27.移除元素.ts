/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] 移除元素
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
  const len = nums.length;
  let idle: number;
  for (let i = 0; i < len; i++) {
    const cur = nums[i];
    if (cur === val) {
      if (idle == null) idle = i;
    } else if (idle != null) {
      nums[idle] = cur;
      idle++;
    }
  }
  if (idle != null) {
    const needPop = len - idle;
    for (let i = 0; i < needPop; i++) {
      nums.pop();
    }
  }
  return nums.length;
}
// @lc code=end
