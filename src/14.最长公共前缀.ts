/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  if (!strs.length) return "";
  const first = strs[0];
  const len = first.length;
  for (let i = 0; i < len; i++) {
    const cur = first[i];
    const size = strs.length;
    for (let j = 1; j < size; j++) {
      if (cur !== strs[j][i]) {
        return first.slice(0, i);
      }
    }
  }
  return first;
}
// @lc code=end
