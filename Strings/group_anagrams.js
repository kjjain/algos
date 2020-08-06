let groupAnagrams = function(strs) {
    let obj = {};
    for (let str of strs) {
        let letters = str.split("").sort().join("");
        obj[letters] ? obj[letters].push(str) : obj[letters] = [str];
    }
    return Object.values(obj);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));