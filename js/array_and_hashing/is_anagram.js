// if is anagram send true else false
// Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

let s = "listen";
let t = "silent"; 

const isAnagram = (s,t) => {
  if (s.length !== t.length) return false
  s = s.split("").sort().join("")
  t = t.split("").sort().join("")
  return s === t
}

console.log(isAnagram(s,t))
