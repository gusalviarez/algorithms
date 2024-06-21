let s = "listen";
let t = "silent"; 

const isAnagram = (s,t) => {
  if (s.length !== t.length) return false
  s = s.split("").sort().join("")
  t = t.split("").sort().join("")
  return s === t
}

console.log(isAnagram(s,t))
