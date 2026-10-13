function isAnagram(word1, word2) {
    let mapA = new Map()
    let mapB = new Map()

    for(let i=0; i<word1.length; i++) {
        if(mapA.has(word1[i])){
            let charCount = mapA.get(word1[i])
            mapA.set(word1[i], charCount + 1)
        } else {
            mapA.set(word1[i], 1)
        }
    }

    for(let i=0; i<word2.length; i++) {
        if(mapB.has(word2[i])){
            let charCount = mapB.get(word2[i])
            mapB.set(word2[i], charCount + 1)
        } else {
            mapB.set(word2[i], 1)
        }
    }

    if (mapA.size !== mapB.size) {
    return false;
}

for (const [character, count] of mapA) {
    if (!mapB.has(character)) {
        return false;
    }

    if (mapB.get(character) !== count) {
        return false;
    }
}

return true;
}


console.log(isAnagram("sat", "astt"))