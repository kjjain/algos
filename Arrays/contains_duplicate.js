


/**
 *
 * Given an array of integers, find if the array contains any duplicates.
 Your function should return true if any value appears at least twice in the array,
 and it should return false if every element is distinct.

 Example 1:

 Input: [1,2,3,1]
 Output: true

 *
 * **/

let containsDuplicate = function(nums) {

    let left = 0;
    let right = nums.length - 1;

    while(left < right) {
        if(nums[left] === nums[right]) {
            return true;
        } else {
            left++;
        }
    }
    return false;
};


console.log(containsDuplicate([1,2,3,1]));

