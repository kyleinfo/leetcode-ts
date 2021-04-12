/*
 * @lc app=leetcode.cn id=7 lang=typescript
 *
 * [7] 整数反转
 */

// @lc code=start
function reverse(x: number): number {
  if (x == 0) return 0;
  let tmp = x;
  let sum = 0;
  while (tmp >= 10 || tmp <= -10) {
    const tail = tmp % 10;
    tmp = (tmp - tail) / 10;
    sum = sum * 10 + tail;
  }
  let safe: boolean;
  if (x > 0) {
    safe = (2 ** 31 - 1 - tmp) / 10 > sum;
  } else {
    safe = (-(2 ** 31) - tmp) / 10 < sum;
  }
  return safe ? sum * 10 + tmp : 0;
}
// @lc code=end
