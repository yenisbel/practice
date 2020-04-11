// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

function changeCoins(coins, amount, memo = {}) {
  let key = amount + "-" + coins;
  if( key in memo) return memo[key];
  if(amount === 0) return 1;
  let currentLastCoin = coins[coins.length -1];
  let totalCombinations = 0;
  for (let quantity = 0; quantity * currentLastCoin <= coins.length; quantity++) {
    totalCombinations +=  changeCoins(coins.slice(o, -1), amount - quantity * currentLastCoin, memo)
  }
  memo[key] = totalCombinations;
  return memo[key]

}
