/*
 * @lc app=leetcode.cn id=38 lang=typescript
 *
 * [38] 外观数列
 */

// @lc code=start
function countAndSay(n: number): string {
  if (n === 1) return '1';
  const str = countAndSay(n - 1);
  const result = [];
  const len = str.length;
  let prev: string;
  for (let i = 0; i < len; i++) {
    const cur = str[i];
    if (prev != cur) {
      prev = cur;
      result.push(1);
      result.push(cur);
    } else {
      const pos = result.length - 2;
      result[pos] = result[pos] + 1;
    }
  }
  return result.join('');
}
// @lc code=end
