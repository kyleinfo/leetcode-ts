/*
 * @lc app=leetcode.cn id=67 lang=typescript
 *
 * [67] 二进制求和
 */

// @lc code=start
function addBinary(a: string, b: string): string {
  const x = a.length;
  const y = b.length;
  const len = x > y ? x : y;
  const result: string[] = [];
  let extra = false;
  for (let i = 0; i < len; i++) {
    const l = x > i ? a[x - i - 1] : '0';
    const n = y > i ? b[y - i - 1] : '0';
    if (l === n) {
      result.push(extra ? '1' : '0');
      extra = l === '1';
    } else {
      result.push(extra ? '0' : '1');
    }
  }
  if (extra) result.push('1');
  return result.reverse().join('');
}
// @lc code=end
