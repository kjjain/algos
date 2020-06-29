function fourNumberSum(array, targetSum) {

    array.sort((a, b) => (a - b));

    let result = [];


    for (let i = 0; i < array.length - 3; i++) {
        for (let j = i + 1; j < array.length - 2; j++) {

            let left = 0;
            let right = array.length - 1;

            while (left < right) {

                const sum = array[i] + array[j] + array[left] + array[right];

                if (sum === targetSum) {
                    result.push([array[i], array[j], array[left], array[right]]);
                    left++;
                    right--;
                } else if (sum < targetSum) {
                    left++;
                } else if (sum > targetSum) {
                    right--;
                }
            }
        }
    }
    // Write your code here.
}

// Do not edit the line below.
exports.fourNumberSum = fourNumberSum;
