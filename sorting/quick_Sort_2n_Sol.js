function quickSort(arr){
    if(arr.length === 1) return arr;

    const pivot = arr[arr.length -1];
    const leftArr = [];
    const rightArr = [];

    for(let i=0; i< arr.length - 1; i++){
        if(arr[i] < pivot){
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }

    console.log(leftArr);
    console.log(rightArr);

    if(leftArr.length > 0 && rightArr.length > 0){
        return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
    } else if(leftArr.length > 0){
        return [...quickSort(leftArr), pivot];
    } else {
        return [pivot, ...quickSort(rightArr)]
    }
}

quickSort([12,1,43,553,223,112,53,124]);