/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  if (!strs.length) return "";
  const first = strs[0];
  for (let i = 0, len = first.length; i < len; i++) {
    const cur = first[i];
    for (let j = 1, leng = strs.length; j < leng; j++) {
      if (cur !== strs[j][i]) {
        return first.slice(0, i);
      }
    }
  }
  return first;
}
// @lc code=end
