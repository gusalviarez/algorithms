const text = "Which is the best arepa?"
const replacement = "%20"
const original = " "

const name1 = "replaceAll method"
const replace_string = (text, original, replacement) => {
   return text.replaceAll(original, replacement);
}

const name2 = "refactored"
const replace_string2 = (text, original, replacement) => {
   text = text.trim();
   let newstring = '';
   for (const char of text) {
      newstring += char === original ? replacement : char;
   }
   return newstring;
}

console.time(name1)
console.log(replace_string(text, original, replacement))
console.timeEnd(name1)

console.time(name2)
console.log(replace_string2(text, original, replacement))
console.timeEnd(name2)
