/**
 *
 *
 * Say you have an array for which the ith element is the price of a given stock on day i.

 If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock),
 design an algorithm to find the maximum profit.

 Note that you cannot sell a stock before you buy one.

 Input: [7,1,5,3,6,4]
 Output: 5
 Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
 Not 7-1 = 6, as selling price needs to be larger than buying price.

 *
 * **/

//We need to use a two pointer solution

const maxProfit = prices => {
    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i += 1) {
        if (minPrice > prices[i]) {
            minPrice = prices[i];
        } else if (minPrice < prices[i]) {
            const currentProfit = prices[i] - minPrice;
            maxProfit = Math.max(maxProfit, currentProfit);
        }
    }

    return maxProfit;
};


console.log(maxProfit([[7,1,5,3,6,4]]));