/*
You are given an integer array prices where prices[i] is the price of NeetCoin on the ith day.

You may choose a single day to buy one NeetCoin and choose a different day in the future to sell it.

Return the maximum profit you can achieve. You may choose to not make any transactions, in which case the profit would be 0.

Example 1:

Input: prices = [10,1,5,6,7,1]

Output: 6

*/
prices = [10,1,5,6,7,1]

const maxProfit = (prices) => {
    let min = prices[0]
    let maxProfit = 0

    for (let i = 1; i < prices.length; i++) {
        min = Math.min(min, prices[i])
        maxProfit = Math.max(prices[i] - min, maxProfit)
    }

    return maxProfit
}

console.log(maxProfit(prices))
