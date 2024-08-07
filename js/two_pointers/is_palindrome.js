// a palindrome is a string that reads the same forwards and backwards

let s = "Was it a car or a cat I saw?"

const isPalindrome = (s) => {
   s = s.toLowerCase().replace(/[^a-z0-9]/g, "")
   reversed = s.split("").reverse().join("")
   return s == reversed
}

function isPalindrome2(str) {
   let re = /[^A-Za-z0-9]/g;
   str = str.toLowerCase().replace(re, '');
   let len = str.length;
   for (var i = 0; i < len / 2; i++) {
      if (str[i] !== str[len - 1 - i]) {
         return false;
      }
   }
   return true;
}

