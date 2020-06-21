

/**
 * Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

 Example 1:

 Input: a = 1, b = 2
 Output: 3
 *
 * **/

let getSum = function(a, b) {
    let carry;
    while((a & b) !== 0){
        carry = (a & b) << 1;
        a = a ^ b;
        b = carry;
    }
    return a ^ b;
};

console.log(getSum(1,2));