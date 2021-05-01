/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
  if (!s) return true;
  let j = 0;
  const stack = [];
  const match = ["()", "[]", "{}"];
  for (let i = 0, len = s.length; i < len; i++) {
    const c = s[i];
    if (j) {
      const p = stack[j - 1];
      const pair = p + c;
      if (match.includes(pair)) {
        j--;
        continue;
      }
    }
    stack[j] = c;
    j++;
  }
  return !j;
}
// @lc code=end
