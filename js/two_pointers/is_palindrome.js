// a palindrome is a string that reads the same forwards and backwards

let s = "Was it a car or a cat I saw?"

const isPalindrome = (s) => {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, "")
  reversed = s.split("").reverse().join("")
  return s == reversed
}

console.log(isPalindrome(s))
