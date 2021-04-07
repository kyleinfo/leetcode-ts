/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
  if (!s) return true;
  const len = s.length;
  let j = 0;
  const stack = [];
  for (let i = 0; i < len; i++) {
    const c = s[i];
    if (j) {
      const p = stack[j - 1];
      if (
        (p === "(" && c === ")") ||
        (p === "[" && c === "]") ||
        (p === "{" && c == "}")
      ) {
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
