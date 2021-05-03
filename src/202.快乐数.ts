/*
 * @lc app=leetcode.cn id=202 lang=typescript
 *
 * [202] 快乐数
 */

// @lc code=start
function isHappy(n: number): boolean {
  if (n === 1) return true;

  const set = new Set();
  while (!set.has(n)) {
    set.add(n);
    let sum = 0;
    let tmp = 0;
    while (n >= 10) {
      tmp = n % 10;
      sum += tmp ** 2;
      n = (n - tmp) / 10;
    }
    sum += n ** 2;
    if (sum === 1) return true;
    n = sum;
  }
  return false;
}
// @lc code=end
