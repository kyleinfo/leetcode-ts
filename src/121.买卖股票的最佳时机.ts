/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let result = 0;
  let buy = Infinity;
  let sold = -Infinity;
  for (let i = prices.length - 1; i >= 0; i--) {
    const cur = prices[i];
    if (cur > sold) {
      buy = Infinity;
      sold = cur;
    } else if (cur < buy) {
      buy = cur;
      const val = sold - buy;
      result = val > result ? val : result;
    }
  }
  return result;
}
// @lc code=end
