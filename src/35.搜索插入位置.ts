/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
function searchInsert(
  nums: number[],
  target: number,
  start?: number,
  end?: number,
): number {
  start = start ?? 0;
  end = end ?? nums.length;
  if (start >= end) return start;
  const middle = start + ((end - start) >> 1);
  const value = nums[middle];
  if (value === target) return middle;
  if (value < target) return searchInsert(nums, target, middle + 1, end);
  if (value > target) return searchInsert(nums, target, start, middle);
}
// @lc code=end
