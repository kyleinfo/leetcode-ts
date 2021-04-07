/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  if (x < 10) return true;
  const arr = [];
  while (x) {
    const tail = x % 10;
    arr.push(tail);
    x = (x - tail) / 10;
  }
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    if (arr[i] !== arr[j]) return false;
    i++;
    j--;
  }
  return true;
}
// @lc code=end
