//const numbers = [2, 3, 2, 5, 3, 2, 4];

/*** output
 * 
 * {
    2: 3,
    3: 2,
    5: 1,
    4: 1
}
 */


function countFrequency(nums) {
    let frequencyCounterMap = new Map()
    for(let i=0; i<nums.length; i++) {

        if(frequencyCounterMap.has(nums[i])) {
            frequencyCounterMap.set(nums[i], frequencyCounterMap.get(nums[i]) + 1)
        } else {
        frequencyCounterMap.set(nums[i], 1)
        }
        
    }

    return frequencyCounterMap
}
const numbers = [2, 3, 2, 5, 3, 2, 4]
console.log(countFrequency(numbers))