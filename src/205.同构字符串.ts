/*
 * @lc app=leetcode.cn id=205 lang=typescript
 *
 * [205] 同构字符串
 */

// @lc code=start
function isIsomorphic(s: string, t: string): boolean {
  const map = {};
  const pam = {};
  for (let i = 0, len = s.length; i < len; i++) {
    const si = s[i];
    const ti = t[i];
    if (map[si] == null && pam[ti] == null) {
      map[si] = ti;
      pam[ti] = si;
    } else if (map[si] === ti && pam[ti] === si) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}
// @lc code=end
