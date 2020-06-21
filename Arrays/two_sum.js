//Find the sum of two digits in the array to find the target

// [2,5,8,9,7]   target: 11    result: [0,3]



function twoSum(arr, target){

    arr.sort((a,b) => a-b);
    let left = 0;
    let right = arr.length - 1;

    while(left < right){
        const currentSum = arr[left] + arr[right];

        if(currentSum === target){
            return[left, right];
        } else if(currentSum < target){
            left++;
        } else if(currentSum > target){
            right--;
        }
    }

    return [];
}

console.log(twoSum([2,5,8,9,7], 11));