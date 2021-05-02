/*
 * @lc app=leetcode.cn id=125 lang=typescript
 *
 * [125] 验证回文串
 */

// @lc code=start
function isPalindrome(s: string): boolean {
  if (s === "") return true;
  const reg = /[^a-zA-Z0-9]/g;
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    const l = s[i];
    const r = s[j];
    if (l.match(reg)) {
      i++;
    } else if (r.match(reg)) {
      j--;
    } else if (l === r || l.toLowerCase() === r.toLowerCase()) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
}
// @lc code=end
