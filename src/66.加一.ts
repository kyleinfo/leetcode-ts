/*
 * @lc app=leetcode.cn id=66 lang=typescript
 *
 * [66] 加一
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    const val = digits[i];
    if (val < 9) {
      digits[i] = val + 1;
      break;
    } else {
      digits[i] = 0;
    }
  }
  if (digits[0] === 0) digits.unshift(1);
  return digits;
}
// @lc code=end
