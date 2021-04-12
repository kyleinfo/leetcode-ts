/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
function climbStairs(n: number): number {
  const table = [];
  for (let i = 0; i <= n; i++) {
    table[i] = i < 3 ? i : table[i - 1] + table[i - 2];
  }
  return table[n];
}
// @lc code=end
