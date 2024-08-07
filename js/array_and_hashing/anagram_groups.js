/*
Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:
Input: strs = ["act","pots","tops","cat","stop","hat"]
Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
*/

let strs = ["act","pots","tops","cat","stop","hat"]

const name1 = "group anagrams using a map"
const group_anagram = (strs) => {
    let map = new Map()
    for (let str of strs) {
        let sorted = str.split('').sort().join('')
        if (map.has(sorted)) {
            map.get(sorted).push(str)
        } else {
            map.set(sorted, [str])
        }
    }
    console.log(Array.from(map.values()))
    return Array.from(map.values())
}

console.time(name1)
group_anagram(strs)
console.timeEnd(name1)
