function countFrequency(word){
    let frequencyMap = new Map()

    for (let i=0 ; i<word.length; i++) {
        if(frequencyMap.has(word.charAt(i))) {
            frequencyMap.set(word.charAt(i), frequencyMap.get(word.charAt(i)) + 1)
        } else {
            frequencyMap.set(word.charAt(i), 1)
        }
    }

    return frequencyMap;
}

const word = "hello";

console.log(countFrequency(word))