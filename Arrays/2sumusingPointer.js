function twoSum(nums, target) {
    let left = 0;
    let right  = nums.length - 1

    for(let i=0; i< nums.length; i++) {
        let sum = nums[left] + nums[right]

        if(sum === target) {
            return [left, right]
        } else if(sum < target) {
            left = left + 1
        } else {
            right = right - 1
        }
    }

    return false
}

console.log(twoSum([2,3,6,8,11,20,35], 10))