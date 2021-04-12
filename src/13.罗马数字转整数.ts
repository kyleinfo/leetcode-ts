/*
 * @lc app=leetcode.cn id=13 lang=typescript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
function romanToInt(s: string): number {
  const terms = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
    'IV': 4,
    'IX': 9,
    'XL': 40,
    'XC': 90,
    'CD': 400,
    'CM': 900,
  };
  const splited = s.split(
    /(?<![IXC])\B|(?<=I)\B(?!V|X)|(?<=X)\B(?!L|C)|(?<=C)\B(?!D|M)/g,
  );
  return splited.reduce((prev, cur) => prev + terms[cur], 0);
}
// @lc code=end
