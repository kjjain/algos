function firstDuplicate(nums) {
   let seen = new Set();
   for(let i = 0; i < nums.length; i++) {
       if(seen.has(nums[i])) {
           return nums[i];
       }
       seen.add(nums[i]);
   }
   return -1

}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));