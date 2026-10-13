function binarySearch(arr, value){
    arr.sort((a,b) => a-b);

    let low = 0;
    let high = arr.length - 1;

    while(low <= high){
        let mid = Math.floor((high+low)/2);

        if(arr[mid] === value){
            return value;
        } else if(value > arr[mid]) {
            low = mid+1;
        } else {
            high = mid-1;
        }
    }
    return -1;
}

binarySearch([2,5,12,10,3,7,8], 10);