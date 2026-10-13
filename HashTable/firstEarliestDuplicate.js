// nums = [5,3,2,3,4,5]

function firstEarliestDuplicate(nums) {
let seen = new Set()
let duplicateMap = new Map()

for(let i=0; i<nums.length;i++){
    if(seen.has(nums[i])){
        return [nums[i], i]
    }
    seen.add(nums[i])
}
return -1 

}