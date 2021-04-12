/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let result = Number.MIN_SAFE_INTEGER;
  let sold = Number.MIN_SAFE_INTEGER;
  for (let i = prices.length - 1; i >= 0; i--) {
    const cur = prices[i];
    sold = sold > cur ? sold : cur;
    result = result > sold - cur ? result : sold - cur;
  }
  return result;
}
// @lc code=end
