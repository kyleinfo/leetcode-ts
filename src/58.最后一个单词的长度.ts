/*
 * @lc app=leetcode.cn id=58 lang=typescript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
function lengthOfLastWord(s: string): number {
  let end: number;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== ' ') {
      if (end == null) end = i;
    } else if (end != null) {
      return end - i;
    }
  }
  return end == null ? 0 : end + 1;
}
// @lc code=end
